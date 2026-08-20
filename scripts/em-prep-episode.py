#!/usr/bin/env python3
"""Mechanical prep for one Explicit Measures episode post.

Downloads the auto-captions, splits and cleans them into the strict transcript
format, writes a digest for the writer to summarise from, and generates the
featured/thumbnail images into the post directory.

Usage:
    python3 scripts/em-prep-episode.py --ep 554 --video-id K6_PwhIoAEU \
        --slug fabric-as-a-backend-ep-554

Prints JSON describing where everything landed. After this, write the post at
`post_dir/index.md` with `[TRANSCRIPT_PLACEHOLDER]` in the transcript section,
then run merge-transcript.py and verify-podcast-post.py.

See .github/skills/tips-pod-post/AUTOMATION.md for why the yt-dlp flags and the
Pillow image path are the way they are.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLIENTS = ["tv_embedded", "mediaconnect"]
CHUNKS = 6
DIGEST_ENTRIES = 34


def run(cmd: list[str]) -> str:
    proc = subprocess.run(cmd, capture_output=True)
    if proc.returncode != 0:
        raise SystemExit(f"FAILED: {' '.join(cmd[:3])}\n{proc.stderr.decode()[:600]}")
    return proc.stdout.decode()


def ytdlp_json(vid: str, attempts: int = 12) -> dict:
    """Video metadata. Retries: YouTube rate-limits datacenter IPs hard."""
    for attempt in range(attempts):
        proc = subprocess.run(
            ["yt-dlp", "--extractor-args",
             f"youtube:player_client={CLIENTS[attempt % len(CLIENTS)]}",
             "--skip-download", "--no-warnings", "-J",
             f"https://www.youtube.com/watch?v={vid}"],
            capture_output=True, timeout=300)
        if proc.returncode == 0:
            return json.loads(proc.stdout)
        time.sleep(30 * (attempt + 1))
    raise SystemExit(f"could not read metadata for {vid} — YouTube is rate limiting, retry later")


def download_captions(vid: str, work: str, attempts: int = 40) -> str:
    """Auto-captions as VTT. Ep. 548 needed 15 tries, Ep. 554 needed 22."""
    vtt = f"{work}/transcript.en.vtt"
    if os.path.exists(vtt):
        return vtt
    for attempt in range(attempts):
        subprocess.run(
            ["yt-dlp", "--extractor-args",
             f"youtube:player_client={CLIENTS[attempt % len(CLIENTS)]}",
             "--write-auto-sub", "--sub-lang", "en", "--skip-download", "--no-warnings",
             "-o", f"{work}/transcript", f"https://www.youtube.com/watch?v={vid}"],
            capture_output=True, timeout=300)
        if os.path.exists(vtt):
            print(f"captions downloaded on attempt {attempt + 1}", file=sys.stderr)
            return vtt
        time.sleep(90)
    raise SystemExit(f"could not download captions for {vid} after {attempts} attempts")


def fit(src_path: str, out_path: str, w: int, h: int) -> None:
    """Scale to fit preserving aspect ratio, pad white. No ffmpeg in CI images."""
    from PIL import Image
    im = Image.open(src_path).convert("RGB")
    im.thumbnail((w, h), Image.LANCZOS)
    canvas = Image.new("RGB", (w, h), "white")
    canvas.paste(im, ((w - im.width) // 2, (h - im.height) // 2))
    canvas.save(out_path)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ep", type=int, required=True)
    ap.add_argument("--video-id", required=True)
    ap.add_argument("--slug", required=True)
    ap.add_argument("--work", default=None, help="scratch dir (default /tmp/em<EP>)")
    args = ap.parse_args()

    vid = args.video_id
    work = args.work or f"/tmp/em{args.ep}"
    os.makedirs(f"{work}/chunks", exist_ok=True)

    meta = ytdlp_json(vid)
    date = meta.get("upload_date")  # YYYYMMDD
    post_dir = os.path.join(REPO, "src", "content", "blog",
                            date[:4], date[4:6], date[6:], args.slug)
    os.makedirs(f"{post_dir}/assets", exist_ok=True)

    vtt = download_captions(vid, work)
    run(["python3", f"{REPO}/scripts/split-transcript.py", vtt, f"{work}/chunks", str(CHUNKS)])
    run(["python3", f"{REPO}/scripts/clean-transcript-chunks.py", f"{work}/chunks",
         "--video-id", vid])

    entries: list[str] = []
    for i in range(CHUNKS):
        path = f"{work}/chunks/chunk_{i:02d}_clean.md"
        if os.path.exists(path):
            entries += [e for e in open(path, encoding="utf-8").read().split("\n\n") if e.strip()]
    step = max(1, len(entries) // DIGEST_ENTRIES)
    strip = lambda s: re.sub(r"<[^>]+>", "", s).strip()
    with open(f"{work}/digest.txt", "w", encoding="utf-8") as fh:
        fh.write(f"EP {args.ep} | {meta.get('title')} | {date} | "
                 f"{(meta.get('duration') or 0) // 60}min | video {vid}\n")
        fh.write(f"entries: {len(entries)}\n\n=== DESCRIPTION ===\n")
        fh.write((meta.get("description") or "") + "\n\n=== DIGEST ===\n")
        for i in range(0, len(entries), step):
            fh.write(strip(entries[i]) + "\n\n")

    src = f"{post_dir}/assets/source.jpg"
    if not os.path.exists(src):
        for quality in ("maxresdefault", "hqdefault"):
            proc = subprocess.run(
                ["curl", "-sf", "-o", src, f"https://img.youtube.com/vi/{vid}/{quality}.jpg"])
            if proc.returncode == 0 and os.path.getsize(src) > 5000:
                break
    fit(src, f"{post_dir}/assets/featured.png", 800, 500)
    fit(f"{post_dir}/assets/featured.png", f"{post_dir}/assets/thumbnail.png", 300, 169)

    print(json.dumps({
        "ep": args.ep,
        "video_id": vid,
        "title": meta.get("title"),
        "date": f"{date[:4]}-{date[4:6]}-{date[6:]}",
        "post_dir": post_dir,
        "chunks": f"{work}/chunks",
        "digest": f"{work}/digest.txt",
        "entries": len(entries),
    }, indent=1))


if __name__ == "__main__":
    main()
