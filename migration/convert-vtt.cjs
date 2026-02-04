#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const YOUTUBE_DIR = path.join(__dirname, 'youtube');
const OUTPUT_DIR = path.join(__dirname, 'transcripts');

// Video metadata (from playlist)
const videos = [
  { id: 'UGw2xLfYfbc', title: 'OpenClaw, ClawdBot, MoltBot Whatever Name it is, Our Thoughts' },
  { id: 'caPmITvRp3M', title: 'LLMs: The Future of App Building' },
  { id: 'Oci4HAdx3Vw', title: 'Is Natural Language the Last Programming Language?' },
  { id: 'ilcDylEoCl0', title: 'Agents Designing Languages: The Future of Programming' },
  { id: 'vmaKFypjE7Y', title: 'Distribute New Skills Within Your Team!' },
  { id: 'sjyqMoSQPug', title: 'AI Agents Slash Project Costs' },
  { id: '5txMJjXt1pA', title: 'AI Subscriptions: Save Money vs. Pro Fees' },
  { id: 'DvzPKbXtTG0', title: 'Control Projects via Telegram Commands' },
  { id: 'qHMe-JC8evo', title: 'Unlock AI Agent Secrets: Discover Claude Skills' },
  { id: '9TMZgOu2pCk', title: 'AI Saves Time: Code Faster!' },
  { id: 'HmiZ6VOrU2w', title: "OpenClaw's Soul File: Restricted access employee" },
  { id: 'em-0Nxxiitw', title: 'LLMs Aim to Know Everything!' },
  { id: 'q8kVcIqLHEk', title: 'Future of Programming: New Challenges Arise' },
  { id: 'OYKFz5BANCs', title: 'AI Evolves: Natural Language & Code Explained' },
  { id: 'sy6wqN7TQb4', title: 'Clawdbot Evolves: Power BI Automation' },
  { id: 'heSnw2sTdWY', title: 'Abstraction Layers Removed?' },
  { id: '8zkpjsRYTqo', title: 'Adapt to AI by Problem-Solving' }
];

function parseVTT(content) {
  const lines = content.split('\n');
  const textLines = [];
  let lastText = '';
  
  for (const line of lines) {
    // Skip WEBVTT header, timestamps, and metadata
    if (line.startsWith('WEBVTT') || 
        line.startsWith('Kind:') || 
        line.startsWith('Language:') ||
        line.match(/^\d{2}:\d{2}/) ||
        line.match(/^align:/) ||
        line.trim() === '') {
      continue;
    }
    
    // Clean up the text - remove timing tags like <00:00:00.640><c>
    let text = line.replace(/<[^>]+>/g, '').trim();
    
    // Skip duplicates and empty lines
    if (text && text !== lastText) {
      textLines.push(text);
      lastText = text;
    }
  }
  
  // Join and clean up the text
  let transcript = textLines.join(' ');
  
  // Clean up common issues
  transcript = transcript
    .replace(/\s+/g, ' ')  // Multiple spaces to single
    .replace(/\s([.,!?])/g, '$1')  // Space before punctuation
    .trim();
  
  return transcript;
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Converting VTT files to transcripts...\n');

for (const video of videos) {
  const vttPath = path.join(YOUTUBE_DIR, `${video.id}.en.vtt`);
  
  if (!fs.existsSync(vttPath)) {
    console.log(`SKIP: ${video.title} - VTT not found`);
    continue;
  }
  
  const vttContent = fs.readFileSync(vttPath, 'utf8');
  const transcript = parseVTT(vttContent);
  
  // Create output file
  const outputPath = path.join(OUTPUT_DIR, `${video.id}.md`);
  const output = `# ${video.title}

**YouTube:** https://www.youtube.com/watch?v=${video.id}

## Transcript

${transcript}
`;
  
  fs.writeFileSync(outputPath, output);
  console.log(`DONE: ${video.title} (${transcript.length} chars)`);
}

console.log('\nAll transcripts saved to:', OUTPUT_DIR);
