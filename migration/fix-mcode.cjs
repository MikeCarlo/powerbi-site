#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

function wrapMCodeBlocks(content) {
  // Match let...in blocks that are NOT already inside code fences
  // Split content into code-fenced and non-fenced parts
  const fenceRegex = /(```[\s\S]*?```)/g;
  const parts = content.split(fenceRegex);
  
  return parts.map((part, i) => {
    // Skip code fence parts (odd indices after split)
    if (part.startsWith('```')) return part;
    
    // Find let...in blocks and wrap them
    // Pattern: "let" at start of line, followed by code, ending with "in" line and result
    const mCodePattern = /(^|\n)(let\s*\n[\s\S]*?\n\s*in\s*\n\s*[^\n]+)/g;
    
    return part.replace(mCodePattern, (match, prefix, code) => {
      // Clean up escaped characters that turndown might have added
      let cleaned = code
        .replace(/\\_/g, '_')
        .replace(/\\\[/g, '[')
        .replace(/\\\]/g, ']')
        .replace(/\\\{/g, '{')
        .replace(/\\\}/g, '}');
      
      return prefix + '```powerquery\n' + cleaned + '\n```';
    });
  }).join('');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  content = wrapMCodeBlocks(content);
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function walkDir(dir) {
  let fixed = 0;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fixed += walkDir(filePath);
    } else if (file.endsWith('.mdx')) {
      if (processFile(filePath)) {
        console.log('Fixed:', path.relative(BLOG_DIR, filePath));
        fixed++;
      }
    }
  }
  return fixed;
}

const fixed = walkDir(BLOG_DIR);
console.log(`\nFixed ${fixed} files with M code blocks`);
