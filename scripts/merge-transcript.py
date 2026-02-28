#!/usr/bin/env python3
"""Merge cleaned transcript chunks into blog post."""
import sys, os, glob, re

def merge_chunks(chunks_dir):
    chunk_files = sorted(glob.glob(os.path.join(chunks_dir, 'chunk_*_clean.md')))
    if not chunk_files:
        print("No cleaned chunk files found (expected chunk_XX_clean.md)")
        sys.exit(1)
    merged = []
    for cf in chunk_files:
        with open(cf, 'r') as f:
            content = f.read().strip()
            if content:
                merged.append(content)
    return '\n\n'.join(merged)

def merge_with_post(post_path, transcript_text):
    with open(post_path, 'r') as f:
        post_content = f.read()
    
    transcript_section = f"## Episode Transcript\n\nFull verbatim transcript — click any timestamp to jump to that moment:\n\n{transcript_text}"
    
    # Replace placeholder
    placeholder = re.search(r'^## Episode Transcript\s*\n\s*\[TRANSCRIPT_PLACEHOLDER\]', post_content, re.MULTILINE)
    thank_you = re.search(r'^## Thank You', post_content, re.MULTILINE)
    
    if placeholder:
        post_content = post_content[:placeholder.start()] + transcript_section + '\n\n' + post_content[placeholder.end():]
    elif thank_you:
        post_content = post_content[:thank_you.start()] + transcript_section + '\n\n' + post_content[thank_you.start():]
    else:
        post_content = post_content.rstrip() + '\n\n' + transcript_section + '\n'
    
    with open(post_path, 'w') as f:
        f.write(post_content)
    print(f"Merged transcript ({len(transcript_text)} chars) into {post_path}")

if len(sys.argv) < 2:
    print("Usage: merge-transcript.py <chunks_dir> [post_path]")
    sys.exit(1)

chunks_dir = sys.argv[1]
transcript = merge_chunks(chunks_dir)

if len(sys.argv) >= 3:
    merge_with_post(sys.argv[2], transcript)
else:
    print(transcript)
