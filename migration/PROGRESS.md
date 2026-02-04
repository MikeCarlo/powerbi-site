# PowerBI.tips Migration Progress

## Status: IN PROGRESS
Started: 2026-02-04 00:59 CST

## Summary
- Total blog posts to scrape: ~200
- Total pages to scrape: ~19
- Posts completed: 0
- Pages completed: 0
- Current position: Starting

## Blog Posts (from wp-sitemap-posts-post-1.xml)
Posts are in reverse chronological order (newest first in sitemap, but we'll process oldest first).

### Completed Posts
(none yet)

### In Progress
(none)

### Queue (oldest first - we'll work through these)
See `scrape-queue.json` for full list

## Pages (from wp-sitemap-posts-page-1.xml)
- [ ] /top-tutorials/
- [ ] /about/
- [ ] /about/california-privacy-rights/
- [ ] /about/general-privacy-rights/
- [ ] /about/terms-of-use/
- [ ] /about/copyright-dmca-policy/
- [ ] /about/owners/
- [ ] /about/contributors/
- [ ] /tools/
- [ ] /tools/layouts-5/
- [ ] /tools/scrims/
- [ ] /recent/
- [ ] /training/
- [ ] /explicit-measures-power-bi-podcast/
- [ ] /theme-generator/
- [ ] /theme-generator/powerbi-tips-tools-now-in-fabric/
- [ ] /cookie-policy-eu/

## Notes
- Skip posts that already exist in new site
- Rate limit: ~5 seconds between fetches to be nice to the server
- Save progress after each post so we can resume
- Extract: title, date, author, categories, tags, content, images
