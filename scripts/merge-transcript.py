#!/usr/bin/env python3
"""Merge cleaned transcript chunks into blog post.

- Reads chunk_XX_clean.md files in a chunks directory
- Produces merged transcript text
- If a post path is provided, replaces the existing "## Episode Transcript" section
  (up to "## Thank You") with the merged transcript.

This is intentionally strict to avoid duplicate transcript sections from repeated merges.
"""

import sys, os, glob, re


def merge_chunks(chunks_dir: str) -> str:
    chunk_files = sorted(glob.glob(os.path.join(chunks_dir, 'chunk_*_clean.md')))
    if not chunk_files:
        print("No cleaned chunk files found (expected chunk_XX_clean.md)")
        sys.exit(1)

    merged = []
    for cf in chunk_files:
        with open(cf, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read().strip()
            if content:
                merged.append(content)
    return '\n\n'.join(merged).strip() + '\n'


def merge_with_post(post_path: str, transcript_text: str) -> None:
    with open(post_path, 'r', encoding='utf-8', errors='ignore') as f:
        post_content = f.read()

    transcript_text = transcript_text.strip() + "\n"
    transcript_section = f"## Episode Transcript\n\n{transcript_text}".rstrip() + "\n\n"

    transcript_hdr = re.search(r'^## Episode Transcript\b.*$', post_content, re.MULTILINE)
    thank_you = re.search(r'^## Thank You\b.*$', post_content, re.MULTILINE)
    placeholder = re.search(r'^## Episode Transcript\s*\n\s*\[TRANSCRIPT_PLACEHOLDER\]\s*$', post_content, re.MULTILINE)

    if transcript_hdr and thank_you and thank_you.start() > transcript_hdr.start():
        post_content = post_content[:transcript_hdr.start()] + transcript_section + post_content[thank_you.start():]
    elif placeholder:
        post_content = post_content[:placeholder.start()] + transcript_section + post_content[placeholder.end():]
    elif thank_you:
        post_content = post_content[:thank_you.start()] + transcript_section + post_content[thank_you.start():]
    else:
        post_content = post_content.rstrip() + "\n\n" + transcript_section

    with open(post_path, 'w', encoding='utf-8') as f:
        f.write(post_content)

    print(f"Merged transcript ({len(transcript_text)} chars) into {post_path}")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: merge-transcript.py <chunks_dir> [post_path]")
        sys.exit(1)

    chunks_dir = sys.argv[1]
    transcript = merge_chunks(chunks_dir)

    if len(sys.argv) >= 3:
        merge_with_post(sys.argv[2], transcript)
    else:
        print(transcript)
