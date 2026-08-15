---
name: tips-pod-post
description: Create a blog post from a YouTube podcast episode for PowerBI.tips. Use when given a YouTube URL for an Explicit Measures podcast episode. Downloads transcript, finds top shorts, summarizes news links, and formats a complete blog post with an interactive click-to-seek transcript.
---

# PowerBI.tips Podcast Blog Post

Create a full blog post from an Explicit Measures podcast episode on YouTube.

## The transcript is interactive — read this first

Episode posts are enhanced by `src/components/PodcastPlayer.astro`. On the
published page, **clicking a transcript line seeks the embedded YouTube player**
instead of navigating away to YouTube. The active line highlights as the episode
plays, and the video detaches into a sticky mini-player once the reader scrolls
into the transcript.

Nothing extra goes in the post to enable this. The component reads the markup
this skill already produces — which means **the format below is load-bearing, not
cosmetic**. A post that drifts from it still renders, but silently loses
click-to-seek.

### Hard requirements

1. **The episode `<iframe>` must be the first YouTube embed in the post.** Shorts
   are embedded later, inside Main Discussion. The component treats the first
   embed as the episode player.
2. **Transcript links must use the episode's own video ID** — the same ID as the
   embed. If they disagree, the component refuses to bind the transcript (seeking
   would jump to the wrong video), and the feature is silently off.

   > **If you hit a mismatch, do not just rewrite the ID.** Read the transcript
   > first. A mismatch almost always means the transcript was downloaded from the
   > wrong video, so the *text* belongs to a different episode — swapping the ID
   > would leave a foreign transcript attached to this post, now pointing at
   > timestamps in an unrelated video. Re-run the pipeline against the correct
   > video instead. (Ep. 422 was the cautionary example — its post carried
   > Ep. 426's transcript until it was regenerated against the correct video.)
3. **One entry per paragraph.** Every entry starts at the beginning of its own
   line with a blank line before it. Entries on consecutive lines merge into a
   single paragraph in markdown, putting several timestamps on one clickable line.
4. **The timestamp label is a bare clock** — `M:SS` or `H:MM:SS`, nothing else.
   The copy-link button and `#M:SS` deep links parse this text.
5. **`t=` is whole seconds** (`&t=1345s`) and must match the label it displays.
   The player seeks using `t=`; a mismatch sends the reader to the wrong moment.
6. **Use the plain embed URL.** Do not add `enablejsapi`, wrapper divs, or your
   own player script — the component handles all of that at runtime.
7. **Don't wrap the transcript in `<details>`.** It hides the transcript from
   readers by default and buries the click-to-jump hint.

Everything still degrades gracefully: with JavaScript off, each timestamp remains
a plain YouTube link, and modifier-clicks always open YouTube.

### Verify before committing

```bash
python3 scripts/verify-podcast-post.py src/content/blog/YYYY/MM/DD/slug/index.md
```

This checks every requirement above and must pass with no errors. Use `--all` to
sweep the whole archive.

## Prerequisites

> **Running this from a cloud container or a scheduled job?** Read
> [`AUTOMATION.md`](./AUTOMATION.md) first. YouTube blocks datacenter IPs, so
> the plain `yt-dlp` commands below fail without extra flags; there is no
> ffmpeg; and two helper scripts (`em-find-new-episodes.py`,
> `em-prep-episode.py`) already wrap the whole mechanical half of this skill.

This skill extends `pbitips-blog-post`. All base requirements apply:
- ✅ Min 1 author (usually "Mike Carlo", "Tommy Puglia", or both)
- ✅ Min 1 category (always include "Podcast")
- ✅ Featured image (800×500 PNG)
- ✅ Excerpt (2-sentence synopsis)

## Input Required

A YouTube URL for the podcast episode, e.g.:
```
https://www.youtube.com/watch?v=nrdmarO_L4g
```

## Architecture: Parallel Pipeline

The post and transcript are processed **in parallel** using sub-agents to avoid timeouts:

```
┌─────────────────┐
│  Main Agent      │
│  (orchestrator)  │
├─────────────────┤
│ 1. Download VTT  │ ← yt-dlp (fast, ~5 sec)
│ 2. Split VTT     │ ← split-transcript.py (fast, ~1 sec)
│ 3. Spawn agents: │
│    ├─ Post writer │ ← writes blog post with [TRANSCRIPT_PLACEHOLDER]
│    ├─ Chunk 0     │ ← cleans transcript segment 0
│    ├─ Chunk 1     │ ← cleans transcript segment 1
│    └─ Chunk 2     │ ← cleans transcript segment 2
│ 4. Wait for all   │
│ 5. Spawn next 3:  │ ← chunks 3, 4, 5 (if slots freed)
│ 6. Merge          │ ← merge-transcript.py
│ 7. Verify         │ ← verify-podcast-post.py (must be clean)
│ 8. Commit & push  │
└─────────────────┘
```

**Concurrency limit:** Run **3 transcript cleaners at a time** (not 6 — respects sub-agent limits).

### Scripts

Located in `scripts/` at the repo root:

- **`em-find-new-episodes.py`** — Diffs the playlist against existing posts and
  prints the episodes with no post yet. Start here.
  ```bash
  python3 scripts/em-find-new-episodes.py --limit 5
  ```

- **`em-prep-episode.py`** — Does steps 1–2 below in one shot for a single
  episode: captions (with the retry behaviour YouTube requires), split, clean,
  a digest to summarise from, and both images. Prefer this over running the
  pieces by hand.
  ```bash
  python3 scripts/em-prep-episode.py --ep 554 --video-id K6_PwhIoAEU \
      --slug fabric-as-a-backend-ep-554
  ```

- **`split-transcript.py`** — Splits VTT into N time-based chunks
  ```bash
  python3 scripts/split-transcript.py /tmp/epXXX/transcript.en.vtt /tmp/epXXX/chunks 6
  ```

- **`merge-transcript.py`** — Merges cleaned chunks into blog post
  ```bash
  # Merge into post (replaces [TRANSCRIPT_PLACEHOLDER])
  python3 scripts/merge-transcript.py /tmp/epXXX/chunks path/to/index.md
  
  # Or output to stdout
  python3 scripts/merge-transcript.py /tmp/epXXX/chunks
  ```

## Workflow

### Step 1: Extract Episode Info

From the YouTube video:
- **Title** — Use as blog post title (e.g., "We Made It! Episode 500 of Explicit Measures")
- **Episode Number** — Extract from title (e.g., "Ep. 500" → `500`)
- **Video ID** — For iframe embed (e.g., `nrdmarO_L4g`)
- **Description** — Extract news links and topics

### Step 2: Download & Split Transcript

Preferred (deterministic) transcript cleaning: run the cleaner script after splitting. If you use this, you can skip transcript-cleaner sub-agents.

Critical transcript guardrail: after cleaning/merge, run `verify-podcast-post.py`
(see Step 5). It fails on `>>`, `&gt;&gt;`, `<c>`, `</c>`, embedded cue
timestamps, merged paragraphs, and video-ID mismatches. Fix the cleaner output —
not the post by hand — before build/commit.

```bash
cd ~/projects/powerbi-site

mkdir -p /tmp/epXXX
# --extractor-args is required from any datacenter IP; without it yt-dlp gets
# "Sign in to confirm you're not a bot". Expect to retry. See AUTOMATION.md.
yt-dlp --extractor-args "youtube:player_client=tv_embedded" \
    --write-auto-sub --sub-lang en --skip-download -o "/tmp/epXXX/transcript" "VIDEO_URL"
python3 scripts/split-transcript.py /tmp/epXXX/transcript.en.vtt /tmp/epXXX/chunks 6
python3 scripts/clean-transcript-chunks.py /tmp/epXXX/chunks --video-id VIDEO_ID
```

### Step 3: Spawn Parallel Sub-Agents

Fire these simultaneously:

**Sub-agent 1: Post Writer** (runTimeoutSeconds=600)
- Find shorts, fetch/summarize news links, create featured image
- Write the full blog post with `[TRANSCRIPT_PLACEHOLDER]` instead of transcript
- Do NOT commit

**Sub-agents 2-4: Transcript Cleaners batch 1** (runTimeoutSeconds=300 each)
- Each cleans one chunk file → `chunk_XX_clean.md`
- 3 at a time to respect concurrency limits

When batch 1 finishes, fire **Sub-agents 5-7: Transcript Cleaners batch 2** for remaining chunks.

### Step 4: Merge Transcript

Once all chunks and the post are done:

NOTE: You can safely run `merge-transcript.py` multiple times; it will replace the entire `## Episode Transcript` section up to `## Thank You` to avoid duplicate transcript sections.


```bash
cd ~/projects/powerbi-site
python3 scripts/merge-transcript.py /tmp/epXXX/chunks path/to/post/index.md
```

`merge-transcript.py` writes one blank line between entries. If you ever edit the
transcript by hand afterwards, keep those blank lines — see Step 5.

### Step 5: Verify

```bash
cd ~/projects/powerbi-site
python3 scripts/verify-podcast-post.py src/content/blog/YYYY/MM/DD/slug/index.md
```

Must report **0 errors** before committing. It enforces the interactive-transcript
contract from the top of this skill: embed present and first, transcript links on
the episode's own video ID, one entry per paragraph, bare `M:SS` labels agreeing
with `t=`, and no caption artifacts.

If you rebuilt the site and a content edit doesn't show up, clear Astro's content
cache — it stores rendered markdown and can serve a stale copy:

```bash
rm -f node_modules/.astro/data-store.json
```

### Step 6: Commit & Push

```bash
cd ~/projects/powerbi-site
git pull
git add src/content/blog/
git commit -m "Add podcast post: Ep. XXX"
git push origin main
```

### Step 7: Clean Up

```bash
rm -rf /tmp/epXXX
```

## Sub-Agent Task Templates

### Post Writer Task

```
Write ONLY the blog post (NO transcript) for PowerBI.tips Episode XXX.

Read .github/skills/tips-pod-post/SKILL.md first for the format template, including
the "The transcript is interactive" section — the embed and transcript markup are
load-bearing, not cosmetic.

Episode: Ep. XXX: VIDEO_URL (TITLE)
Video ID: VIDEO_ID

Work in ~/projects/powerbi-site. Do these steps:
1. git pull
2. Get the YouTube video description for news links
3. Find shorts using: bash .github/skills/tips-pod-post/scripts/find-shorts.sh XXX
4. Create featured image from YouTube thumbnail — scale to fit 800x500 preserving aspect ratio with white padding (no distortion). Also generate 300x169 thumbnail with same approach. (`em-prep-episode.py` already does this with Pillow; the ffmpeg commands below need ffmpeg installed, which cloud containers usually lack.):
   ```bash
   curl -o source.jpg "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   ffmpeg -i source.jpg -vf "scale=800:500:force_original_aspect_ratio=decrease,pad=800:500:(ow-iw)/2:(oh-ih)/2:white" -update 1 -y assets/featured.png
   ffmpeg -i assets/featured.png -vf "scale=300:169:force_original_aspect_ratio=decrease,pad=300:169:(ow-iw)/2:(oh-ih)/2:white" -update 1 -y assets/thumbnail.png
   ```
5. Write the blog post at the correct path following the podpost template
6. For the transcript section, just put: ## Episode Transcript\n\n[TRANSCRIPT_PLACEHOLDER]
7. DO NOT commit or push — just create the files

Use index.md (NOT .mdx). The transcript will be merged separately.
```

### Transcript Cleaner Task (STRICT OUTPUT FORMAT)

Use this exact contract so `merge-transcript.py` can safely merge without human cleanup.

```
Clean a raw VTT transcript chunk into formatted blog transcript.

VIDEO_ID: VIDEO_ID
Input file: /tmp/epXXX/chunks/chunk_NN.txt
Output file: /tmp/epXXX/chunks/chunk_NN_clean.md

Input format:
- Each input line is: TIMESTAMP|RAW_TEXT

OUTPUT FORMAT (ABSOLUTELY STRICT):
The published page makes these lines clickable — clicking one seeks the embedded
player. The format below is what makes that work, so match it exactly.
- Output must contain ONLY transcript entries.
- Each entry is one line starting exactly with:
  <a href="https://www.youtube.com/watch?v=VIDEO_ID&t=XXs" target="_blank">M:SS</a> ...
- VIDEO_ID must be THIS episode's video — never a short's ID.
- Put a blank line between entries. Two entries on consecutive lines merge into
  one paragraph and break click-to-seek for that line.
- The link text is a bare clock only (M:SS, or H:MM:SS past an hour). No labels,
  no bold, no surrounding punctuation.
- The `t=` seconds must equal the displayed clock (t=1345s ⇒ 22:25).

Example:
<a href="https://www.youtube.com/watch?v=VIDEO_ID&t=23s" target="_blank">0:23</a> Good morning and welcome back to the explicit measures podcast.

<a href="https://www.youtube.com/watch?v=VIDEO_ID&t=34s" target="_blank">0:34</a> You're not sick of it yet?

Rules:
- Strip VTT artifacts: remove <c>...</c>, <00:..> tags, any HTML-like tags, and decode HTML entities first.
- Remove caption speaker markers like `>>` and HTML-escaped `&gt;&gt;` anywhere they appear.
- De-duplicate rolling/overlapping cues (keep the most complete line).
- Remove ONLY these filler words/phrases (case-insensitive): uh, um, you know, kind of, sort of, I mean.
- VERBATIM otherwise: do NOT normalize/correct spelling or product names.
- Speaker changes => new timestamp (but do NOT add speaker labels).
- Convert HH:MM:SS.ms to total seconds for the `t=` parameter and M:SS for display.
- Profanity: only replace "bullshit" -> "BS" (case-insensitive). Leave crap/crappy.

Do NOT include:
- Headers like "# Transcript" or "Video: ..."
- Markdown bullets/lists
- Speaker labels ("Mike:", "Tommy:", "Speaker 1")
- youtu.be short links
```

## Post Format Template


### Required: 2-pass writing (Draft → Polish)

For every episode post, do **two writing passes**:

1) **Draft pass**: generate the full post (intro, News & Announcements, Main Discussion, Looking Forward, Transcript).
2) **Polish pass (required)**: immediately do a second pass that rewrites only the *summary* parts to be more useful and less repetitive.

**Polish pass rules (do not break builds):**

- Do **NOT** change or add any frontmatter keys outside the allowed schema.
- Do **NOT** change section headings (keep anchors stable: `## News & Announcements`, `## Main Discussion`, `## Looking Forward`, `## Episode Transcript`, `## Thank You`).
- Do **NOT** modify the transcript section formatting or timestamp links.
- Improve:
  - `excerpt` (make it a real “what you’ll learn” blurb, not a title restatement)
  - intro paragraph (hook + context + payoff)
  - Main Discussion (1 short framing paragraph + **5–8** decision/takeaway bullets)
  - News link bullets (must be **Title + summary**; delete any link you can’t understand)
  - Looking Forward (1 practical next-step sentence)

### Deep-link anchors (site feature)

- Keep the standard H2 headings **exactly** as written (`## News & Announcements`, `## Main Discussion`, `## Looking Forward`, `## Episode Transcript`, `## Thank You`) so the page anchors stay consistent (e.g. `#main-discussion`).
- Transcript timestamps must display as **M:SS** (or **H:MM:SS**) with no extra text. The site adds a copy-link button next to each timestamp that copies a `.../#0:23` style link, and opening that link seeks the embedded player to that moment. Both features parse the label text, so anything other than a bare clock breaks them.
- The transcript heading itself can be `## Episode Transcript` (standard) — the player finds whichever heading precedes the first entry, but stick to the standard so the `#episode-transcript` anchor stays stable.

```mdx
---
title: "Episode Title – Ep. XXX"
date: "YYYY-MM-DD"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Topic1"
  - "Topic2"
excerpt: "Two sentence synopsis of the episode. What's the main topic and why should someone listen?"
featuredImage: "./assets/featured.png"
---

[Two sentence synopsis matching the excerpt — hook the reader]

<!-- The episode embed. MUST be the first YouTube iframe in the post — the
     transcript player binds to it. Plain embed URL, no enablejsapi. -->
<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="Episode Title"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

[Summarize news segment from transcript. Include URLs from video description with 2-3 sentence summaries.]

- [News Item 1 Title](URL) — 2-3 sentence summary of what this link covers and why it matters for Power BI users.

- [News Item 2 Title](URL) — 2-3 sentence summary explaining the key points and relevance to the community.

## Main Discussion

**Topic:** [Main topic of the episode]

[Detailed summary of the main discussion. Focus on key insights and takeaways from the show discussion.]

### [Subtopic 1]

[Summarize key points, quotes, and takeaways]

### [Subtopic 2]

[Continue with major discussion points. Place shorts where they add context.]

### [Subtopic 3]

[More discussion — embed another short if relevant here]

## Looking Forward

[Summarize any predictions, future plans, or calls to action from the episode]

## Episode Transcript

[TRANSCRIPT_PLACEHOLDER]

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
```

## Transcript Formatting

### Purpose

The transcript is **verbatim spoken content** — NOT summaries. This serves SEO purposes:
- Bots and AI can index all keywords (Fabric, lakehouse, DAX, Copilot, etc.)
- Search engines can find the episode for topic-specific queries
- AI agents can understand what the episode covers

### Verbatim Content Rules

1. **Include actual spoken words** — What Mike and Tommy say, not your summary
2. **Speaker changes = new timestamp** — Don't use `>>` markers, just start a new line with new timestamp
3. **Remove filler words** — Drop uh, um, you know, kind of, sort of, I mean, etc.
4. **Include banter and asides** — Natural conversation helps SEO and readability
5. **Clean up VTT artifacts** — Remove duplicate lines, timestamps, and formatting tags

### Timestamp Format

**2-3 sentences per timestamp** (~30 second chunks). Speaker changes get their own timestamp.

```html
<a href="https://www.youtube.com/watch?v=VIDEO_ID&t=23s" target="_blank">0:23</a> Good morning and welcome back to the explicit measures podcast with Tommy and Mike.

<a href="https://www.youtube.com/watch?v=VIDEO_ID&t=34s" target="_blank">0:34</a> You're not sick of it yet?
```

- Each chunk = ~30 seconds / 2-3 sentences
- Speaker changes = new timestamp (no `>>` markers)
- Remove filler words: uh, um, you know, kind of, sort of, I mean
- Aim for ~200 entries per hour of content
- Blank line between every entry — this is what puts each one on its own
  clickable line
- The timestamp is also the deep-link anchor: the site gives each entry a
  copy-link button that yields `.../#22:25`, and opening that link seeks the
  player straight to that moment

### What NOT to Do

❌ **Don't summarize** — "Mike talks about AI" 
✅ **Do transcribe** — "I'm having so much fun with AI. This is one of the things that I'm doing now."

❌ **Don't paraphrase** — "They discussed trusting Fabric"
✅ **Do quote** — "My thesis here is you can trust fabric. You can do it. Jump in."

## News Link Summarization

For each URL in the video description:

1. **Fetch the page** using web_fetch or similar
2. **Extract key points** — What is it? What's new? Why does it matter?
3. **Write 2-3 sentences** — Concise summary for readers who won't click

**Format:**
```markdown
- [Article Title](https://example.com/article) — First sentence explains what it is. Second sentence covers the key announcement or change. Third sentence (optional) explains relevance to Power BI practitioners.
```

## Finding Shorts

### Using the Script

```bash
bash .github/skills/tips-pod-post/scripts/find-shorts.sh 501
```

Shorts are titled `501 - Some title` (older ones use `501:`); the script
matches both. They usually appear a few days after the episode, so a post
written the same week may have none — that is fine, they are optional.

### Short Embed Format

```html
<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/SHORT_VIDEO_ID" 
  title="Short Title"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>
```

### Shorts Integration

**No dedicated "Top Shorts" section.** Embed shorts within the Main Discussion where they make contextual sense.

**Never place a short above the episode embed.** The transcript player binds to
the first YouTube iframe on the page; a short there would take over as the
episode player. Shorts anywhere below it are fine — the player only binds
transcript lines whose video ID matches the episode.

## Content Guidelines

### Synopsis (Excerpt)

- Exactly 2 sentences
- First sentence: What's the episode about
- Second sentence: Why it matters / key takeaway

### Main Discussion Summary

Focus on:
- **Mike's key insights** — Usually the bold predictions and technical takes
- **Tommy's perspective** — Often the business/organizational angle
- **Debates & disagreements** — These make great content
- **Quotable moments** — Direct quotes that capture the essence

## Checklist

- [ ] Episode number extracted from title
- [ ] YouTube iframe with correct VIDEO_ID, and it is the **first** embed in the post
- [ ] Plain embed URL — no `enablejsapi`, no custom player wrapper
- [ ] Transcript links all use the **episode's** VIDEO_ID (not a short's)
- [ ] Blank line between every transcript entry (one entry per paragraph)
- [ ] Timestamp labels are bare `M:SS` / `H:MM:SS` and match their `t=` seconds
- [ ] `python3 scripts/verify-podcast-post.py <post>` reports 0 errors
- [ ] Built with `rm -f node_modules/.astro/data-store.json` first, and the new
      page confirmed present in `dist/` — a cached build reports success while
      silently omitting the post
- [ ] Shorts embedded contextually in Main Discussion (not a separate section, never above the episode embed)
- [ ] News links fetched and summarized (2-3 sentences each)
- [ ] Main discussion summarized with Mike & Tommy's key points
- [ ] **Verbatim transcript** merged via parallel pipeline
- [ ] Featured image (800×500) generated from YouTube thumbnail
- [ ] Thumbnail (300×169) generated
- [ ] All required frontmatter fields present
- [ ] Thank you section with standard CTAs
- [ ] Use index.md (NOT .mdx)

## Repository

- **GitHub:** https://github.com/MikeCarlo/powerbi-site
- **Local:** `~/projects/powerbi-site`
- **Actions:** https://github.com/MikeCarlo/powerbi-site/actions
