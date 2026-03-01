#!/usr/bin/env python3
"""Clean a VTT transcript into formatted blog transcript HTML.

Usage: clean-transcript.py <input.vtt> <video_id> [output.md]

Replaces the 6 sub-agent chunk cleaners with a single deterministic script.
- Parses VTT, deduplicates rolling cues, strips HTML tags
- Removes filler words (uh, um, you know, kind of, sort of, I mean)
- Groups into ~30 second timestamped chunks
- Outputs formatted HTML with YouTube deep links
"""
import re, sys, os

FILLER_PATTERNS = [
    r'\buh\b', r'\bum\b', r'\buhm\b', r'\bmm\b', r'\bhmm\b',
    r'\byou know\b', r'\bkind of\b', r'\bsort of\b', r'\bi mean\b',
    r'\blike\s+like\b',
]

def parse_vtt(filepath):
    """Parse VTT into list of (start_seconds, text) tuples."""
    with open(filepath, 'r') as f:
        content = f.read()
    # Strip VTT header
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
                raw = ' '.join(text_lines)
                secs = ts_to_seconds(start_ts)
                blocks.append((secs, raw))
        else:
            i += 1
    return blocks

def ts_to_seconds(ts):
    parts = ts.split(':')
    return int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])

def seconds_to_display(secs):
    """Convert seconds to M:SS display format."""
    m = int(secs) // 60
    s = int(secs) % 60
    return f"{m}:{s:02d}"

def strip_html(text):
    """Remove HTML/VTT tags like <c>, </c>, inline timestamps."""
    text = re.sub(r'<[^>]+>', '', text)
    # Remove inline VTT timestamps like <00:01:23.456>
    text = re.sub(r'<\d+:\d+:\d+\.\d+>', '', text)
    return text

def clean_filler(text):
    """Remove filler words."""
    for pat in FILLER_PATTERNS:
        text = re.sub(pat, '', text, flags=re.IGNORECASE)
    # Clean up double spaces left by removals
    text = re.sub(r'\s{2,}', ' ', text).strip()
    # Clean up orphaned punctuation
    text = re.sub(r'\s+([,.])', r'\1', text)
    return text

def dedup_rolling_cues(blocks):
    """Deduplicate overlapping VTT rolling cues.
    
    VTT auto-subs repeat text across consecutive cues. We detect overlap
    by checking if one cue's text is a substring/prefix of the next.
    Keep only the longest version of each segment.
    """
    if not blocks:
        return blocks
    
    deduped = []
    i = 0
    while i < len(blocks):
        secs, text = blocks[i]
        clean = strip_html(text).strip().lower()
        
        # Look ahead to find the longest non-overlapping version
        j = i + 1
        best_text = text
        best_secs = secs
        while j < len(blocks):
            next_clean = strip_html(blocks[j][1]).strip().lower()
            # Check if current text is contained in or overlaps with next
            # VTT rolling cues typically share the last portion of text
            words_current = clean.split()
            words_next = next_clean.split()
            
            # Check suffix overlap: last N words of current match first N words of next
            overlap = 0
            for k in range(min(len(words_current), len(words_next)), 0, -1):
                if words_current[-k:] == words_next[:k]:
                    overlap = k
                    break
            
            if overlap >= max(2, len(words_current) // 2):
                # Significant overlap — merge by taking next (which has new content appended)
                best_text = blocks[j][1]
                best_secs = blocks[j][0]
                clean = next_clean
                j += 1
            else:
                break
        
        deduped.append((best_secs, best_text))
        i = j
    
    return deduped

def group_into_chunks(blocks, chunk_seconds=30):
    """Group cleaned text blocks into ~30 second chunks."""
    if not blocks:
        return []
    
    chunks = []
    current_texts = []
    chunk_start = blocks[0][0]
    
    for secs, text in blocks:
        cleaned = clean_filler(strip_html(text)).strip()
        if not cleaned:
            continue
            
        if current_texts and (secs - chunk_start) >= chunk_seconds:
            merged = ' '.join(current_texts)
            # Clean up repeated words from dedup boundaries
            merged = re.sub(r'\b(\w+)( \1\b)+', r'\1', merged)
            merged = re.sub(r'\s{2,}', ' ', merged).strip()
            if merged:
                chunks.append((chunk_start, merged))
            current_texts = []
            chunk_start = secs
        
        current_texts.append(cleaned)
    
    # Flush last chunk
    if current_texts:
        merged = ' '.join(current_texts)
        merged = re.sub(r'\b(\w+)( \1\b)+', r'\1', merged)
        merged = re.sub(r'\s{2,}', ' ', merged).strip()
        if merged:
            chunks.append((chunk_start, merged))
    
    return chunks

def format_output(chunks, video_id):
    """Format chunks into blog transcript HTML."""
    lines = []
    for secs, text in chunks:
        total_secs = int(secs)
        display = seconds_to_display(secs)
        # Capitalize first letter
        if text:
            text = text[0].upper() + text[1:]
        # Ensure ends with period
        if text and text[-1] not in '.?!':
            text += '.'
        line = f'<a href="https://www.youtube.com/watch?v={video_id}&t={total_secs}s" target="_blank">{display}</a> {text}'
        lines.append(line)
    return '\n\n'.join(lines)

def main():
    if len(sys.argv) < 3:
        print("Usage: clean-transcript.py <input.vtt> <video_id> [output.md]")
        sys.exit(1)
    
    input_file = sys.argv[1]
    video_id = sys.argv[2]
    output_file = sys.argv[3] if len(sys.argv) > 3 else None
    
    # Parse
    blocks = parse_vtt(input_file)
    if not blocks:
        print("No blocks found in VTT")
        sys.exit(1)
    
    # Dedup rolling cues
    deduped = dedup_rolling_cues(blocks)
    
    # Group into ~30s chunks and format
    chunks = group_into_chunks(deduped, chunk_seconds=30)
    
    # Format output
    output = format_output(chunks, video_id)
    
    if output_file:
        os.makedirs(os.path.dirname(output_file) or '.', exist_ok=True)
        with open(output_file, 'w') as f:
            f.write(output)
        print(f"Cleaned transcript: {len(blocks)} raw -> {len(deduped)} deduped -> {len(chunks)} chunks ({len(output)} chars) -> {output_file}")
    else:
        print(output)
        print(f"\n---\nStats: {len(blocks)} raw -> {len(deduped)} deduped -> {len(chunks)} chunks ({len(output)} chars)", file=sys.stderr)

if __name__ == '__main__':
    main()
