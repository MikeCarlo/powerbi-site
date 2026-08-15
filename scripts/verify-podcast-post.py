#!/usr/bin/env python3
"""Verify a podcast post satisfies the interactive-transcript contract.

The site enhances episode posts with `src/components/PodcastPlayer.astro`:
clicking a transcript line seeks the embedded YouTube player instead of
navigating away. That component reads the markup the post already ships, so a
few conventions are load-bearing. This script checks them.

Usage:
    python3 scripts/verify-podcast-post.py path/to/post/index.md
    python3 scripts/verify-podcast-post.py --all      # sweep every blog post

Exits non-zero if any ERROR is found. Warnings do not fail the run.
"""

from __future__ import annotations

import argparse
import glob
import os
import re
import sys

EMBED_RE = re.compile(r'youtube(?:-nocookie)?\.com/embed/([A-Za-z0-9_-]+)')
# A transcript entry: <a href="...watch?v=ID&t=NNs" ...>M:SS</a>
ENTRY_RE = re.compile(
    r'<a\s+href="https?://(?:www\.)?youtube\.com/watch\?v=([A-Za-z0-9_-]+)&(?:amp;)?t=(\d+)s"'
    r'[^>]*>([^<]*)</a>'
)
CLOCK_RE = re.compile(r'^\d{1,2}:\d{2}(:\d{2})?$')

# Caption junk that must never survive cleaning.
ARTIFACTS = [
    ('>>', 'raw caption speaker marker `>>`'),
    ('&gt;&gt;', 'HTML-escaped speaker marker `&gt;&gt;`'),
    ('<c>', 'VTT cue tag `<c>`'),
    ('</c>', 'VTT cue tag `</c>`'),
]
CUE_TS_RE = re.compile(r'<\d{2}:\d{2}:\d{2}\.\d{3}>')


def clock_to_seconds(text: str) -> int | None:
    parts = text.split(':')
    try:
        parts = [int(p) for p in parts]
    except ValueError:
        return None
    if len(parts) == 2:
        return parts[0] * 60 + parts[1]
    if len(parts) == 3:
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    return None


def check(path: str) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    with open(path, encoding='utf-8', errors='ignore') as f:
        src = f.read()

    entries = list(ENTRY_RE.finditer(src))
    if not entries:
        # Not a transcript post — nothing to enforce.
        return errors, warnings

    # --- 1. The episode embed must exist, and must be the FIRST YouTube embed.
    embeds = list(EMBED_RE.finditer(src))
    if not embeds:
        errors.append(
            'transcript timestamps are present but the post has no YouTube embed, '
            'so there is no player to seek. Add the episode <iframe>.'
        )
        return errors, warnings

    episode_id = embeds[0].group(1)

    # --- 2. Every transcript link must point at that same video.
    linked_ids = {m.group(1) for m in entries}
    wrong = sorted(linked_ids - {episode_id})
    if wrong:
        errors.append(
            f'transcript links point at {", ".join(wrong)} but the episode embed is '
            f'{episode_id}. Click-to-seek is disabled on mismatched posts (it would '
            f'jump to the wrong video). Fix whichever ID is wrong.'
        )

    # --- 3. The embed has to come before the transcript, or a short embedded
    #        mid-post would be picked up as the episode player.
    if embeds[0].start() > entries[0].start():
        errors.append(
            'the first YouTube embed appears after the transcript begins. The episode '
            'embed must be the first one in the post; embed shorts later, in Main Discussion.'
        )
    # Additional embeds (shorts in Main Discussion) are fine wherever they sit —
    # the player keys off the first embed and only binds lines matching its ID.

    # --- 4. Display text must be a bare clock, and must agree with `t=`.
    bad_labels = []
    drifted = []
    for m in entries:
        secs, label = int(m.group(2)), m.group(3).strip()
        if not CLOCK_RE.match(label):
            bad_labels.append(label or '(empty)')
            continue
        as_secs = clock_to_seconds(label)
        if as_secs is not None and as_secs != secs:
            drifted.append(f'{label} vs t={secs}s')
    if bad_labels:
        errors.append(
            f'{len(bad_labels)} timestamp label(s) are not a bare M:SS / H:MM:SS clock '
            f'(e.g. {bad_labels[0]!r}). The copy-link and deep-link features parse this text.'
        )
    if drifted:
        warnings.append(
            f'{len(drifted)} timestamp label(s) disagree with their t= value '
            f'(e.g. {drifted[0]}). The player seeks using t=, so the visible time will look off.'
        )

    # --- 5. Each entry must land in its own paragraph. The player maps a line to
    #        its <p>; entries on consecutive non-blank lines merge into one
    #        paragraph, so several timestamps would share a single clickable line.
    lines = src.split('\n')
    entry_line = re.compile(r'^\s*(?:[*_]{1,2}\s*)?<a href="https?://(?:www\.)?youtube\.com/watch\?v=')
    merged = 0
    mid_prose = 0
    for i, line in enumerate(lines):
        if not entry_line.match(line):
            # An entry starting mid-sentence is a different problem.
            pos = line.find('<a href="https://www.youtube.com/watch?v=')
            if pos > 0 and re.sub(r'[*_>\-\s]', '', line[:pos]):
                mid_prose += 1
            continue
        # A heading or an HTML block tag on the line above already closes the
        # previous block, so only running prose/another entry actually merges.
        prev = lines[i - 1].strip() if i > 0 else ''
        if prev and not prev.startswith('#') and not re.match(r'^</?(?:details|summary|div|p|iframe|br)\b|/?>$', prev):
            merged += 1
    if merged:
        errors.append(
            f'{merged} transcript entr(y/ies) follow a non-blank line, so markdown merges them '
            f'into the previous paragraph. Put a blank line between every entry.'
        )
    if mid_prose:
        errors.append(
            f'{mid_prose} transcript entr(y/ies) start mid-line after prose text. Each entry '
            f'must begin its own line.'
        )

    # --- 6. No caption artifacts.
    for needle, desc in ARTIFACTS:
        if needle in src:
            errors.append(f'contains {desc} — clean the transcript before publishing.')
    if CUE_TS_RE.search(src):
        errors.append('contains embedded VTT cue timestamps like <00:00:12.345> — clean them out.')

    # --- 7. A collapsed transcript hides the feature.
    if re.search(r'<details', src, re.IGNORECASE):
        warnings.append(
            'the transcript is wrapped in <details>. It still works when expanded, but the '
            'click-to-jump hint and the transcript text are hidden by default.'
        )

    # --- 8. The component adds enablejsapi itself.
    if 'enablejsapi' in src:
        warnings.append(
            'the embed sets enablejsapi manually; PodcastPlayer.astro adds it at runtime. '
            'Use the plain embed URL.'
        )

    return errors, warnings


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('paths', nargs='*', help='post file(s) to verify')
    ap.add_argument('--all', action='store_true', help='verify every post under src/content/blog')
    ap.add_argument('-q', '--quiet', action='store_true', help='only print problems')
    args = ap.parse_args()

    paths = list(args.paths)
    if args.all:
        paths += sorted(glob.glob('src/content/blog/**/index.md*', recursive=True))
    if not paths:
        ap.error('pass a post path or --all')

    total_err = total_warn = checked = 0
    for path in paths:
        if not os.path.exists(path):
            print(f'ERROR  {path}: file not found')
            total_err += 1
            continue
        errors, warnings = check(path)
        if not errors and not warnings:
            checked += 1
            if not args.quiet and not args.all:
                print(f'OK     {path}')
            continue
        checked += 1
        for e in errors:
            print(f'ERROR  {path}\n       {e}')
        for w in warnings:
            print(f'WARN   {path}\n       {w}')
        total_err += len(errors)
        total_warn += len(warnings)

    print(f'\nchecked {checked} file(s): {total_err} error(s), {total_warn} warning(s)')
    return 1 if total_err else 0


if __name__ == '__main__':
    sys.exit(main())
