import re

with open('transcript.en.vtt', 'r') as f:
    content = f.read()

# Remove VTT header
content = re.sub(r'^WEBVTT\n.*?\n\n', '', content, flags=re.DOTALL)
blocks = content.strip().split('\n\n')

# YouTube auto-subs have pairs of lines: context line + new line
# Only blocks with inline <c> tags contain new content
# We extract just the new words from each block

all_words = []  # list of (timestamp_secs, word)

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
    block_ts = hrs * 3600 + mins * 60 + secs
    
    # Join all text lines
    full_text = ' '.join(text_lines)
    
    # Find inline timestamps and extract words with their times
    # Pattern: word<HH:MM:SS.mmm><c> nextword</c>
    # The first word in the block gets block_ts
    # Words after <c> tags get the preceding timestamp
    
    # Extract segments with timestamps
    # Remove the context line (first line without <c> tags)
    for tl in text_lines:
        if '<c>' in tl or '<00:' in tl:
            # This line has inline timestamps - extract words
            # Parse: word<TS><c> word2</c><TS><c> word3</c>...
            current_ts = block_ts
            # Get leading word (before first <)
            leading = re.match(r'^([^<]+)', tl)
            if leading:
                word = leading.group(1).strip()
                if word:
                    all_words.append((current_ts, word))
            
            # Get timestamped words
            for m in re.finditer(r'<(\d+:\d+:\d+\.\d+)><c>(.*?)</c>', tl):
                ts_str = m.group(1)
                word = m.group(2).strip()
                ts_parts = ts_str.split(':')
                t = int(ts_parts[0])*3600 + int(ts_parts[1])*60 + float(ts_parts[2])
                current_ts = int(t)
                if word:
                    all_words.append((current_ts, word))

# Now we have all words with timestamps
# Group into ~30 second chunks
VIDEO_ID = 'Ev8OfQWG4VU'

if not all_words:
    print("No words extracted!")
    exit()

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

chunk_start = all_words[0][0]
chunk_words = []
results = []

for ts, word in all_words:
    chunk_words.append(word)
    if ts - chunk_start >= 30 and len(chunk_words) >= 10:
        merged = clean_text(' '.join(chunk_words))
        if merged and merged != '[Music]':
            results.append((chunk_start, merged))
        chunk_words = []
        chunk_start = ts

if chunk_words:
    merged = clean_text(' '.join(chunk_words))
    if merged and merged != '[Music]':
        results.append((chunk_start, merged))

for ts, text in results:
    mins = ts // 60
    secs = ts % 60
    print(f'<a href="https://www.youtube.com/watch?v={VIDEO_ID}&t={ts}s" target="_blank">{mins}:{secs:02d}</a> {text}')
    print()
