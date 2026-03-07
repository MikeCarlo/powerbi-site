#!/usr/bin/env python3
"""Clean split transcript chunk files into strict podpost transcript format.

Input chunk files:  chunk_XX.txt (each line: TIMESTAMP|RAW_TEXT)
Output chunk files: chunk_XX_clean.md

Output format (one entry per line, blank line between entries):
<a href="https://www.youtube.com/watch?v=VIDEO_ID&t=XXs" target="_blank">M:SS</a> Verbatim text...

Rules:
- Strip VTT/HTML tags like <c>..</c>, <00:..>
- Dedupe rolling/overlapping caption lines
- Remove ONLY fillers: uh, um, you know, kind of, sort of, I mean
- Profanity: only replace "bullshit" -> "BS" (case-insensitive)
- VERBATIM otherwise: no normalization / spell correction
"""

from __future__ import annotations

import argparse
import glob
import os
import re
from dataclasses import dataclass

FILLER_PATTERNS = [
    r"\buh\b",
    r"\bum\b",
    r"\byou\s+know\b",
    r"\bkind\s+of\b",
    r"\bsort\s+of\b",
    r"\bi\s+mean\b",
]

TAG_RE = re.compile(r"<[^>]+>")

@dataclass
class Cue:
    t: int
    text: str


def ts_to_seconds(ts: str) -> int:
    # Accept HH:MM:SS(.ms) or MM:SS(.ms)
    ts = ts.strip()
    parts = ts.split(':')
    if len(parts) == 3:
        hh, mm, ss = parts
    elif len(parts) == 2:
        hh = '0'
        mm, ss = parts
    else:
        raise ValueError(f"Bad timestamp: {ts}")
    ss = ss.split('.')[0]
    return int(hh) * 3600 + int(mm) * 60 + int(ss)


def mss(t: int) -> str:
    m = t // 60
    s = t % 60
    return f"{m}:{s:02d}"


def clean_text(s: str) -> str:
    s = s.strip()
    # Remove VTT/HTML-like tags
    s = TAG_RE.sub('', s)
    # Remove embedded timestamps like 00:00:12.000 inside text
    s = re.sub(r"\b\d{1,2}:\d{2}:\d{2}(?:\.\d+)?\b", "", s)
    s = re.sub(r"\b\d{1,2}:\d{2}(?:\.\d+)?\b", "", s)
    # Profanity policy
    s = re.sub(r"bullshit", "BS", s, flags=re.IGNORECASE)
    # Remove fillers (ONLY the approved list)
    for pat in FILLER_PATTERNS:
        s = re.sub(pat, "", s, flags=re.IGNORECASE)
    # Normalize whitespace only
    s = re.sub(r"\s+", " ", s).strip()
    # Clean stray punctuation spacing
    s = re.sub(r"\s+([,.!?;:])", r"\1", s)
    s = re.sub(r"([,.!?;:])(?=\w)", r"\1 ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_chunk(path: str) -> list[Cue]:
    cues: list[Cue] = []
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            line = line.strip('\n')
            if not line.strip():
                continue
            if '|' not in line:
                continue
            ts, raw = line.split('|', 1)
            try:
                t = ts_to_seconds(ts)
            except Exception:
                continue
            text = clean_text(raw)
            if not text:
                continue
            cues.append(Cue(t=t, text=text))
    return cues


def dedupe_cues(cues: list[Cue]) -> list[Cue]:
    # Remove immediate duplicates / rolling cue expansions.
    out: list[Cue] = []
    for c in cues:
        if not out:
            out.append(c)
            continue
        prev = out[-1]
        if c.text == prev.text:
            continue
        # If near in time and one is prefix of the other, keep the longer.
        if abs(c.t - prev.t) <= 2:
            if c.text.startswith(prev.text) and len(c.text) > len(prev.text):
                out[-1] = c
                continue
            if prev.text.startswith(c.text) and len(prev.text) >= len(c.text):
                continue
        out.append(c)
    return out


def merge_into_blocks(cues: list[Cue], block_seconds: int = 30) -> list[tuple[int, str]]:
    blocks: list[list[Cue]] = []
    cur: list[Cue] = []
    start_t: int | None = None

    def flush():
        nonlocal cur, start_t
        if not cur:
            return
        blocks.append(cur)
        cur = []
        start_t = None

    for c in cues:
        if start_t is None:
            start_t = c.t
            cur = [c]
            continue
        if c.t - start_t >= block_seconds:
            flush()
            start_t = c.t
            cur = [c]
        else:
            cur.append(c)

    flush()

    merged: list[tuple[int, str]] = []
    for b in blocks:
        t0 = b[0].t
        # Join with overlap reduction
        acc = ""
        for c in b:
            txt = c.text
            if not acc:
                acc = txt
                continue
            if txt in acc:
                continue
            # If overlap at end (suffix/prefix), merge
            max_olap = 0
            max_k = min(len(acc), len(txt), 80)
            for k in range(10, max_k + 1):
                if acc[-k:].lower() == txt[:k].lower():
                    max_olap = k
            if max_olap:
                acc = (acc + txt[max_olap:]).strip()
            else:
                acc = (acc + " " + txt).strip()
        merged.append((t0, acc))
    return merged


def format_blocks(video_id: str, blocks: list[tuple[int, str]]) -> str:
    lines = []
    for t, text in blocks:
        lines.append(
            f'<a href="https://www.youtube.com/watch?v={video_id}&t={t}s" target="_blank">{mss(t)}</a> {text}'
        )
    return "\n\n".join(lines) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('chunks_dir', help='Directory containing chunk_XX.txt files')
    ap.add_argument('--video-id', required=True)
    ap.add_argument('--block-seconds', type=int, default=30)
    args = ap.parse_args()

    chunk_paths = sorted(glob.glob(os.path.join(args.chunks_dir, 'chunk_*.txt')))
    if not chunk_paths:
        raise SystemExit('No chunk_*.txt files found')

    for p in chunk_paths:
        cues = parse_chunk(p)
        cues = dedupe_cues(cues)
        blocks = merge_into_blocks(cues, block_seconds=args.block_seconds)
        out_text = format_blocks(args.video_id, blocks)
        out_path = p.replace('.txt', '_clean.md')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(out_text)
        print(f"Wrote {out_path} ({len(out_text)} chars)")


if __name__ == '__main__':
    main()
