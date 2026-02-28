import re

with open('transcript.en.vtt', 'r') as f:
    content = f.read()

# Remove VTT header
content = re.sub(r'^WEBVTT\n.*?\n\n', '', content, flags=re.DOTALL)
blocks = content.strip().split('\n\n')

entries = []
for block in blocks:
    lines = block.strip().split('\n')
    ts_line = None
    text_lines = []
    for line in lines:
        if '-->' in line:
            ts_line = line
        elif ts_line is not None:
            text_lines.append(line)
    if not ts_line or not text_lines:
        continue
    match = re.match(r'(\d+):(\d+):(\d+)\.(\d+)', ts_line)
    if not match:
        continue
    hrs, mins, secs = int(match.group(1)), int(match.group(2)), int(match.group(3))
    total_secs = hrs * 3600 + mins * 60 + secs

    # YouTube VTT has 2 lines: first is previous text (context), second is new text with inline timestamps
    # We only want the LAST line (the new content)
    last_line = text_lines[-1]
    # Remove inline timestamps
    last_line = re.sub(r'<\d+:\d+:\d+\.\d+>', '', last_line)
    last_line = re.sub(r'<[^>]+>', '', last_line)
    last_line = last_line.strip()
    
    if last_line and last_line != '[Music]':
        entries.append((total_secs, last_line))

# Now merge consecutive entries to build full text with timestamps
# Group by ~30 second windows
VIDEO_ID = 'Ev8OfQWG4VU'

def clean_text(text):
    text = text.replace('>>', '').replace('&gt;&gt;', '')
    fillers = [
        (r'\buh\b', ''), (r'\bum\b', ''), (r'\byou know\b', ''),
        (r'\bkind of\b', ''), (r'\bsort of\b', ''), (r'\bi mean\b', ''),
    ]
    for pattern, repl in fillers:
        text = re.sub(pattern, repl, text, flags=re.IGNORECASE)
    text = re.sub(r'\s+', ' ', text).strip()
    # Fix capitalization after cleanup
    if text:
        text = text[0].upper() + text[1:]
    return text

chunk_start = entries[0][0] if entries else 0
chunk_texts = []
results = []

for ts, text in entries:
    chunk_texts.append(text)
    if ts - chunk_start >= 30 and len(chunk_texts) >= 3:
        merged = clean_text(' '.join(chunk_texts))
        if merged:
            results.append((chunk_start, merged))
        chunk_texts = []
        chunk_start = ts + 1

if chunk_texts:
    merged = clean_text(' '.join(chunk_texts))
    if merged:
        results.append((chunk_start, merged))

for ts, text in results:
    mins = ts // 60
    secs = ts % 60
    print(f'<a href="https://www.youtube.com/watch?v={VIDEO_ID}&t={ts}s" target="_blank">{mins}:{secs:02d}</a> {text}')
    print()
