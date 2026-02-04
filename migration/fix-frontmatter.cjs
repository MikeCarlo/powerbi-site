#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace pubDate with date
  if (content.includes('pubDate:')) {
    content = content.replace(/pubDate:/g, 'date:');
    changed = true;
  }
  
  // Remove updatedDate line
  if (content.includes('updatedDate:')) {
    content = content.replace(/updatedDate:.*\n/g, '');
    changed = true;
  }
  
  // Remove thumbnail line (keep featuredImage but we'll handle it)
  if (content.includes('thumbnail:')) {
    content = content.replace(/thumbnail:.*\n/g, '');
    changed = true;
  }
  
  // Remove featuredImage with URL (schema expects local image)
  if (content.match(/featuredImage: "http/)) {
    content = content.replace(/featuredImage:.*\n/g, '');
    changed = true;
  }
  
  // Add categories if missing
  if (!content.includes('categories:')) {
    content = content.replace(/(tags:)/, 'categories: []\n$1');
    changed = true;
  }
  
  // Rename description to excerpt if present
  if (content.includes('description:')) {
    content = content.replace(/description:/g, 'excerpt:');
    changed = true;
  }
  
  if (changed) {
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
      if (fixFile(filePath)) {
        console.log('Fixed:', filePath);
        fixed++;
      }
    }
  }
  return fixed;
}

const fixed = walkDir(BLOG_DIR);
console.log(`\nFixed ${fixed} files`);
