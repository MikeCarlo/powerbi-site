#!/usr/bin/env node
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');

const STATE_FILE = path.join(__dirname, 'scrape-state.json');
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const PROGRESS_FILE = path.join(__dirname, 'scrape-progress.log');

// Simple fetch with redirect following
function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(PROGRESS_FILE, line + '\n');
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractContent(html, url) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  
  // Get title
  const titleEl = doc.querySelector('h1.entry-title') || doc.querySelector('h1') || doc.querySelector('title');
  const title = titleEl ? titleEl.textContent.trim().replace(' – PowerBI.tips', '') : 'Untitled';
  
  // Get content
  const contentEl = doc.querySelector('.entry-content') || doc.querySelector('article') || doc.querySelector('main');
  const contentHtml = contentEl ? contentEl.innerHTML : '';
  
  // Convert to markdown
  const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
  let markdown = turndown.turndown(contentHtml);
  
  // Clean up common patterns
  markdown = markdown.replace(/#### Be sure to follow:[\s\S]*$/m, '').trim();
  markdown = markdown.replace(/If you like the content[\s\S]*$/m, '').trim();
  markdown = markdown.replace(/If you like content from[\s\S]*$/m, '').trim();
  
  // Get featured image
  const ogImage = doc.querySelector('meta[property="og:image"]');
  const featuredImage = ogImage ? ogImage.getAttribute('content') : '';
  
  // Get author
  const authorEl = doc.querySelector('.author-name') || doc.querySelector('.entry-author');
  let author = authorEl ? authorEl.textContent.trim() : 'Mike Carlo';
  
  // Map common authors to slugs
  const authorMap = {
    'mike carlo': 'mike-carlo',
    'mike': 'mike-carlo', 
    'seth bauer': 'seth-bauer',
    'seth': 'seth-bauer',
    'ruth pozuelo martinez': 'ruth-pozuelo-martinez',
    'curbal': 'ruth-pozuelo-martinez',
    'adam saxton': 'adam-saxton',
    'guy in a cube': 'adam-saxton',
    'phil seamark': 'phil-seamark',
    'philip seamark': 'phil-seamark',
  };
  const authorSlug = authorMap[author.toLowerCase()] || 'mike-carlo';
  
  // Get description
  const descEl = doc.querySelector('meta[property="og:description"]') || doc.querySelector('meta[name="description"]');
  let description = descEl ? descEl.getAttribute('content') : '';
  if (!description) {
    description = markdown.substring(0, 150).replace(/\n/g, ' ').trim() + '...';
  }
  
  // Extract tags from categories/tags
  const tags = [];
  doc.querySelectorAll('.cat-links a, .tag-links a, .entry-categories a, .entry-tags a').forEach(el => {
    const tag = el.textContent.trim().toLowerCase();
    if (tag && !tags.includes(tag)) tags.push(tag);
  });
  if (tags.length === 0) tags.push('power-bi');
  
  return { title, markdown, featuredImage, authorSlug, description, tags };
}

async function processPost(post) {
  const { url, date } = post;
  
  // Parse date and slug from URL
  const urlMatch = url.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+)/);
  if (!urlMatch) {
    log(`SKIP: Can't parse URL ${url}`);
    return false;
  }
  
  const [, year, month, day, slug] = urlMatch;
  const outDir = path.join(BLOG_DIR, year, month, day, slug);
  const outFile = path.join(outDir, 'index.mdx');
  
  // Skip if exists
  if (fs.existsSync(outFile)) {
    log(`EXISTS: ${slug}`);
    return true;
  }
  
  // Fetch
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    log(`ERROR fetching ${url}: ${err.message}`);
    return false;
  }
  
  if (res.status !== 200) {
    log(`ERROR: ${url} returned ${res.status}`);
    return false;
  }
  
  // Extract content
  const { title, markdown, featuredImage, authorSlug, description, tags } = extractContent(res.body, url);
  
  // Build frontmatter
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${date}"
updatedDate: "${date}"
authors:
  - "${authorSlug}"
tags:
${tags.map(t => `  - "${t}"`).join('\n')}
thumbnail: "${featuredImage}"
featuredImage: "${featuredImage}"
---`;

  const mdx = `${frontmatter}\n\n${markdown}\n`;
  
  // Write
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, mdx);
  log(`DONE: ${slug}`);
  return true;
}

async function main() {
  log('=== Starting migration ===');
  
  // Check deps
  try {
    require('jsdom');
    require('turndown');
  } catch (e) {
    log('Installing dependencies...');
    require('child_process').execSync('npm install jsdom turndown', { cwd: __dirname, stdio: 'inherit' });
  }
  
  const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  const posts = state.posts.filter(p => !p.note?.includes('already exists'));
  
  log(`Total posts to process: ${posts.length}`);
  
  let done = 0, errors = 0, skipped = 0;
  
  for (const post of posts) {
    const result = await processPost(post);
    if (result === true) done++;
    else if (result === false) errors++;
    else skipped++;
    
    // Small delay to be nice
    await new Promise(r => setTimeout(r, 100));
  }
  
  log(`=== COMPLETE ===`);
  log(`Done: ${done}, Errors: ${errors}, Skipped: ${skipped}`);
}

main().catch(err => {
  log(`FATAL: ${err.message}`);
  process.exit(1);
});
