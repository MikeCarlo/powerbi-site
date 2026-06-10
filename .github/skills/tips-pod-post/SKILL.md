---
name: tips-pod-post
description: Create a blog post from a YouTube podcast episode for PowerBI.tips. Use when given a YouTube URL for an Explicit Measures podcast episode. Downloads transcript, finds top shorts, summarizes news links, and formats a complete blog post.
---

# PowerBI.tips Podcast Blog Post

Create a full blog post from an Explicit Measures podcast episode on YouTube.

## Prerequisites

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
│ 7. Commit & push  │
└─────────────────┘
```

**Concurrency limit:** Run **3 transcript cleaners at a time** (not 6 — respects sub-agent limits).

### Scripts

Located in `~/projects/powerbi-site/scripts/`:

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

Critical transcript guardrail: after cleaning/merge, verify the final post transcript contains none of these artifacts: `>>`, `&gt;&gt;`, `<c>`, `</c>`, embedded cue timestamps, or duplicated rolling caption fragments. If any appear, fix the cleaner output before build/commit.

```bash
cd ~/projects/powerbi-site

mkdir -p /tmp/epXXX
yt-dlp --write-auto-sub --sub-lang en --skip-download -o "/tmp/epXXX/transcript" "VIDEO_URL"
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

### Step 5: Commit & Push

```bash
cd ~/projects/powerbi-site
git pull
git add src/content/blog/
git commit -m "Add podcast post: Ep. XXX"
git push origin main
```

### Step 6: Clean Up

```bash
rm -rf /tmp/epXXX
```

## Sub-Agent Task Templates

### Post Writer Task

```
Write ONLY the blog post (NO transcript) for PowerBI.tips Episode XXX.

Read ~/.openclaw/workspace/skills/podpost/SKILL.md first for the format template.

Episode: Ep. XXX: VIDEO_URL (TITLE)
Video ID: VIDEO_ID

Work in ~/projects/powerbi-site. Do these steps:
1. git pull
2. Get the YouTube video description for news links
3. Find shorts using: ./scripts/find-shorts.sh XXX
4. Create featured image from YouTube thumbnail — scale to fit 800x500 preserving aspect ratio with white padding (no distortion). Also generate 300x169 thumbnail with same approach:
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
- Output must contain ONLY transcript entries.
- Each entry is one line starting exactly with:
  <a href="https://www.youtube.com/watch?v=VIDEO_ID&t=XXs" target="_blank">M:SS</a> ...
- Put a blank line between entries.

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
- Transcript timestamps must display as **M:SS** (or **H:MM:SS**) with no extra text; the site adds a copy-link button next to each timestamp and copies `.../#0:23` style links.

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
cd ~/projects/powerbi-site
./scripts/find-shorts.sh 501
```

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
- [ ] YouTube iframe with correct VIDEO_ID
- [ ] Shorts embedded contextually in Main Discussion (not a separate section)
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
