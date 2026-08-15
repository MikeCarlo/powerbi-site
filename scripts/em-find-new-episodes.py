#!/usr/bin/env python3
"""Report Explicit Measures episodes that have no blog post yet.

Compares the podcast playlist against `src/content/blog/**` and prints one
line per missing episode: `EP<tab>VIDEO_ID<tab>TITLE`.

Usage:
    python3 scripts/em-find-new-episodes.py            # missing episodes
    python3 scripts/em-find-new-episodes.py --limit 5  # newest N only

Requires yt-dlp. YouTube blocks the default player clients from datacenter
IPs, so this uses the clients that still work — see
.github/skills/tips-pod-post/AUTOMATION.md.
"""
from __future__ import annotations

import argparse
import glob
import os
import re
import subprocess
import sys
import time

PLAYLIST = "https://www.youtube.com/playlist?list=PLn1m_aBmgsbHr83c1P6uqaWF5PLdFzOjj"
CLIENTS = ["tv_embedded", "mediaconnect"]
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(REPO, "src", "content", "blog")

EP_RE = re.compile(r"(?:\bEp\.?|\bEpisode)\s*#?\s*(\d{1,4})\b", re.I)
SLUG_EP_RE = re.compile(r"-ep-(\d{1,4})(?:/|$)")
EMBED_RE = re.compile(r"youtube(?:-nocookie)?\.com/embed/([A-Za-z0-9_-]{11})")


def fetch_playlist(attempts: int = 8) -> list[tuple[str, str]]:
    for attempt in range(attempts):
        proc = subprocess.run(
            ["yt-dlp", "--extractor-args",
             f"youtube:player_client={CLIENTS[attempt % len(CLIENTS)]}",
             "--flat-playlist", "--no-warnings", "--print", "%(id)s|%(title)s", PLAYLIST],
            capture_output=True, timeout=900)
        rows = [l for l in proc.stdout.decode().splitlines() if "|" in l]
        if rows:
            return [(r.split("|", 1)[0], r.split("|", 1)[1]) for r in rows]
        time.sleep(30 * (attempt + 1))
    sys.exit("could not read the playlist (YouTube rate limiting) — retry later")


def posted() -> tuple[set[int], set[str]]:
    """Episode numbers and video IDs already covered by a post."""
    eps: set[int] = set()
    ids: set[str] = set()
    for path in glob.glob(f"{BLOG}/**/index.md*", recursive=True):
        rel = os.path.relpath(path, BLOG)
        m = SLUG_EP_RE.search(os.path.dirname(rel) + "/")
        text = open(path, encoding="utf-8").read()
        if not m:
            t = re.search(r'^title:\s*"?(.+?)"?\s*$', text, re.M)
            m = EP_RE.search(t.group(1)) if t else None
        if m:
            eps.add(int(m.group(1)))
        ids |= set(EMBED_RE.findall(text))
    return eps, ids


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="only the newest N missing episodes")
    args = ap.parse_args()

    have_eps, have_ids = posted()
    seen: set[int] = set()
    missing = []
    for vid, title in fetch_playlist():
        m = EP_RE.search(title)
        if not m:
            continue  # theme song and other non-episodes
        ep = int(m.group(1))
        if ep in have_eps or vid in have_ids or ep in seen:
            continue  # already posted, or a duplicate upload of the same episode
        seen.add(ep)
        missing.append((ep, vid, title))

    missing.sort()
    total = len(missing)
    if args.limit:
        missing = missing[-args.limit:]
    for ep, vid, title in missing:
        print(f"{ep}\t{vid}\t{title}")
    shown = f", showing newest {len(missing)}" if args.limit and len(missing) < total else ""
    print(f"# {total} episode(s) without a post{shown}", file=sys.stderr)


if __name__ == "__main__":
    main()
