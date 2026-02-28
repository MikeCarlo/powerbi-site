import re

with open('transcript.en.vtt', 'r') as f:
    content = f.read()

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
    text = ' '.join(text_lines)
    text = re.sub(r'<\d+:\d+:\d+\.\d+>', '', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.strip()
    if text and text != '[Music]':
        entries.append((total_secs, text))

deduped = []
prev_text = ''
for ts, text in entries:
    if text != prev_text:
        deduped.append((ts, text))
        prev_text = text

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
    if text:
        text = text[0].upper() + text[1:]
    return text

chunks = []
chunk_start = 0
chunk_texts = []

for ts, text in deduped:
    has_speaker_change = '>>' in text or '&gt;&gt;' in text
    if has_speaker_change and chunk_texts:
        chunks.append((chunk_start, clean_text(' '.join(chunk_texts))))
        chunk_texts = []
        chunk_start = ts
    chunk_texts.append(text)
    if ts - chunk_start >= 30 and len(chunk_texts) >= 2:
        chunks.append((chunk_start, clean_text(' '.join(chunk_texts))))
        chunk_texts = []
        chunk_start = ts + 1

if chunk_texts:
    chunks.append((chunk_start, clean_text(' '.join(chunk_texts))))

for ts, text in chunks:
    if not text:
        continue
    mins = ts // 60
    secs = ts % 60
    print(f'<a href="https://www.youtube.com/watch?v={VIDEO_ID}&t={ts}s" target="_blank">{mins}:{secs:02d}</a> {text}')
    print()
