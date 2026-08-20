# Running the podcast pipeline unattended

`SKILL.md` describes what a good episode post contains. This file covers the
environment problems you will hit running it from a cloud container, and the
helper scripts that work around them. Written after backfilling Ep. 536–554.

## Two scripts do the mechanical work

```bash
# 1. Which episodes have no post yet?
python3 scripts/em-find-new-episodes.py
# 554<TAB>K6_PwhIoAEU<TAB>Fabric as a Backend - Ep.554 - Power BI tips

# 2. Captions, cleaned transcript chunks, digest, and images for one episode
python3 scripts/em-prep-episode.py --ep 554 --video-id K6_PwhIoAEU \
    --slug fabric-as-a-backend-ep-554
```

Then write the post at `post_dir/index.md` with `[TRANSCRIPT_PLACEHOLDER]`,
summarising from `digest.txt`, and finish with the existing tooling:

```bash
python3 scripts/merge-transcript.py <chunks> <post>/index.md
python3 scripts/verify-podcast-post.py <post>/index.md   # must be 0 errors
```

## YouTube blocks datacenter IPs

This is the big one. From a cloud container, the default yt-dlp player clients
return **"Sign in to confirm you're not a bot"**, the innertube player API
returns `LOGIN_REQUIRED`, and plain watch-page fetches 302 to Google's
`/sorry/` CAPTCHA.

- **Working clients:** `tv_embedded` and `mediaconnect`. Pass them with
  `--extractor-args "youtube:player_client=tv_embedded"`. Everything else
  tried — `web`, `web_safari`, `web_embedded`, `android_vr`, `ios`, `tv` —
  fails.
- **Retry with long backoff.** Even the working clients get rate limited in
  waves. Ep. 548 needed 15 attempts at 90s spacing; Ep. 554 needed 22. Both
  helper scripts rotate clients and back off; let them run.
- **Metadata succeeding does not mean captions will.** They rate limit
  separately.
- The playlist *page* (`/playlist?list=…`) stays reachable via plain curl even
  when watch pages are blocked, if you ever need a fallback.

## No ffmpeg

`SKILL.md` uses ffmpeg for the 800×500 featured image and 300×169 thumbnail,
and it is not installed (apt can't fetch it either). `em-prep-episode.py` uses
Pillow instead — same scale-to-fit-and-pad-white result, no distortion.
`pip3 install Pillow` if it is missing.

## Clear the Astro content cache before building

A build can silently reuse cached content and omit brand new posts — the page
count won't change and the post won't appear in `dist/`. Always:

```bash
rm -f node_modules/.astro/data-store.json
npm run build
```

Confirm the new post exists in `dist/` and that
`grep -c "<url>" dist/wp-sitemap-posts-post-1.xml` went up.

## find-shorts.sh matches an old title format

The script filters on `title~='<EP>:'`, but the channel now names shorts
`554 - Some title`. It matches nothing as written. Pull the recent shorts once
and filter yourself:

```bash
yt-dlp --extractor-args "youtube:player_client=tv_embedded" --flat-playlist \
  --print "%(view_count)s|%(id)s|%(title)s" --playlist-end 400 \
  "https://www.youtube.com/@PowerBITips/shorts" | grep -E "\|554[ :-]"
```

Shorts usually appear a few days after the episode, so a post written the same
week may legitimately have none. That is fine — they are optional, and they
must never appear above the episode embed.

## Some news links can't be fetched

Every `community.fabric.microsoft.com` URL returns 403 to automated fetches
(bot protection; the pages are fine in a browser). The hosts read out the
substance of each link on air, so summarise from the transcript and still link
the URL. Never describe specifics you have not verified from either the page or
the episode.

## Duplicate uploads

Occasionally an episode is uploaded twice (Ep. 539 has two). The canonical one
is the earliest upload date that fits the Tuesday/Thursday cadence.
`em-find-new-episodes.py` keeps only the first per episode number.
