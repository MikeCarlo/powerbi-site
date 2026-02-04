#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

// Patterns that look like M/DAX code blocks without proper fencing
function fixMDXContent(content) {
  let fixed = content;
  
  // Fix unescaped curly braces in M code (let...in blocks)
  // Find lines with "let" followed by code-like patterns
  const mCodePattern = /^(let\s*\n[\s\S]*?\nin\s*\n\s*#?"[^"]*")/gm;
  
  // Escape curly braces that aren't in code blocks
  // This is tricky - we need to be careful
  
  // Simple approach: escape { } that aren't already in code fences
  let inCodeBlock = false;
  const lines = fixed.split('\n');
  const fixedLines = lines.map((line, i) => {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;
    
    // Check if this looks like M code (common patterns)
    if (line.match(/Source\s*=|Table\.|Excel\.|Web\.Contents|#"Changed Type"|{\[Item=/) ||
        line.match(/^\s*(let|in)\s*$/) ||
        line.match(/Source{\[/) ||
        line.match(/\]\}\[Data\]/) ||
        line.match(/Table\.TransformColumnTypes/)) {
      // Wrap this and surrounding code in a code fence
      return line;
    }
    
    // Escape standalone curly braces in regular text
    // But not if they're part of markdown links or already escaped
    if (line.includes('{') && !line.match(/\[.*\]\(.*\)/)) {
      return line.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
    }
    
    return line;
  });
  
  return fixedLines.join('\n');
}

function fixMCodeBlocks(content) {
  // Find M code patterns and wrap them in code fences if not already
  let result = content;
  
  // Pattern: let ... in ... that's not in a code fence
  const mCodeRegex = /(?<!```[^\n]*\n)(^let\n[\s\S]*?^in\n\s*[^\n]+)/gm;
  
  result = result.replace(mCodeRegex, (match) => {
    if (match.includes('```')) return match; // Already fenced
    return '```powerquery\n' + match + '\n```';
  });
  
  return result;
}

function escapeJSXInContent(content) {
  // Split by code fences to only process non-code sections
  const parts = content.split(/(```[\s\S]*?```)/g);
  
  return parts.map((part, i) => {
    // Odd indices are code blocks, skip them
    if (part.startsWith('```')) return part;
    
    // Escape { and } that could be interpreted as JSX
    // But be careful with markdown link syntax
    return part
      .replace(/(?<!\[)(\{)(?![^}]*\]\()/g, '\\{')
      .replace(/(?<!\()(\})(?!\])/g, '\\}');
  }).join('');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Wrap M code in code fences
  content = fixMCodeBlocks(content);
  
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
        console.log('Fixed:', filePath);
        fixed++;
      }
    }
  }
  return fixed;
}

const fixed = walkDir(BLOG_DIR);
console.log(`\nFixed ${fixed} files`);
