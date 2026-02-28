#!/usr/bin/env python3
"""Split a VTT transcript into N chunks by timestamp for parallel cleaning."""
import re, sys, os

def parse_vtt(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    content = re.sub(r'^WEBVTT\n.*?\n\n', '', content, flags=re.DOTALL)
    blocks = []
    lines = content.strip().split('\n')
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        ts_match = re.match(r'(\d+:\d+:\d+\.\d+)\s*-->\s*(\d+:\d+:\d+\.\d+)', line)
        if ts_match:
            start_ts = ts_match.group(1)
            text_lines = []
            i += 1
            while i < len(lines) and lines[i].strip() and not re.match(r'\d+:\d+:\d+\.\d+\s*-->', lines[i].strip()):
                if not lines[i].strip().isdigit():
                    text_lines.append(lines[i].strip())
                i += 1
            if text_lines:
                blocks.append((start_ts, ' '.join(text_lines)))
        else:
            i += 1
    return blocks

def ts_to_seconds(ts):
    parts = ts.split(':')
    return int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])

if len(sys.argv) < 3:
    print("Usage: split-transcript.py <input.vtt> <output_dir> [num_chunks]")
    sys.exit(1)

input_file, output_dir = sys.argv[1], sys.argv[2]
num_chunks = int(sys.argv[3]) if len(sys.argv) > 3 else 6
blocks = parse_vtt(input_file)
if not blocks:
    print("No blocks found"); sys.exit(1)

total_seconds = ts_to_seconds(blocks[-1][0])
chunk_duration = total_seconds / num_chunks
os.makedirs(output_dir, exist_ok=True)

chunk_idx = 0
current_chunk = []
for ts, text in blocks:
    target_chunk = min(int(ts_to_seconds(ts) / chunk_duration), num_chunks - 1)
    if target_chunk > chunk_idx and current_chunk:
        outpath = os.path.join(output_dir, f'chunk_{chunk_idx:02d}.txt')
        with open(outpath, 'w') as f:
            for cts, ctext in current_chunk:
                f.write(f'{cts}|{ctext}\n')
        print(f'Chunk {chunk_idx}: {len(current_chunk)} blocks -> {outpath}')
        current_chunk = []
        chunk_idx = target_chunk
    current_chunk.append((ts, text))

if current_chunk:
    outpath = os.path.join(output_dir, f'chunk_{chunk_idx:02d}.txt')
    with open(outpath, 'w') as f:
        for cts, ctext in current_chunk:
            f.write(f'{cts}|{ctext}\n')
    print(f'Chunk {chunk_idx}: {len(current_chunk)} blocks -> {outpath}')

print(f'\nSplit {len(blocks)} blocks into chunks in {output_dir}/')
