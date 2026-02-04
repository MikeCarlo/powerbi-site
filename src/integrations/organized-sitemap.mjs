/**
 * Custom sitemap integration that generates organized sitemaps like WordPress
 * Creates separate sitemaps for posts, pages, categories, tags, and authors
 */

import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

function generateUrlSet(urls) {
  const urlEntries = urls
    .map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateSitemapIndex(sitemaps, siteUrl) {
  const entries = sitemaps
    .map(name => `  <sitemap>\n    <loc>${siteUrl}${name}</loc>\n  </sitemap>`)
    .join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export default function organizedSitemap() {
  return {
    name: 'organized-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages, logger }) => {
        const config = await import('../../astro.config.mjs');
        const site = process.env.SITE || 'https://mikecarlo.github.io';
        const base = process.env.BASE_PATH || '/powerbi-site';
        const siteUrl = `${site}${base}/`;
        
        const posts = [];
        const staticPages = [];
        const categories = [];
        const tags = [];
        const authors = [];
        
        for (const page of pages) {
          const path = page.pathname;
          const fullUrl = `${siteUrl}${path}`;
          
          // Categorize URLs
          if (path.match(/^\d{4}\/\d{2}\/\d{2}\//)) {
            // Blog posts (YYYY/MM/DD/slug/)
            posts.push(fullUrl);
          } else if (path.startsWith('category/') && path !== 'category/') {
            categories.push(fullUrl);
          } else if (path.startsWith('tag/') && path !== 'tag/') {
            tags.push(fullUrl);
          } else if (path.startsWith('author/') && path !== 'author/') {
            authors.push(fullUrl);
          } else if (path && path !== 'category/' && path !== 'tag/' && path !== 'author/') {
            // Static pages (about, training, etc.)
            staticPages.push(fullUrl);
          }
        }
        
        const outDir = dir.pathname;
        const sitemapsGenerated = [];
        
        // Generate individual sitemaps
        if (posts.length > 0) {
          writeFileSync(join(outDir, 'sitemap-posts-1.xml'), generateUrlSet(posts));
          sitemapsGenerated.push('sitemap-posts-1.xml');
          logger.info(`Generated sitemap-posts-1.xml (${posts.length} URLs)`);
        }
        
        if (staticPages.length > 0) {
          writeFileSync(join(outDir, 'sitemap-pages-1.xml'), generateUrlSet(staticPages));
          sitemapsGenerated.push('sitemap-pages-1.xml');
          logger.info(`Generated sitemap-pages-1.xml (${staticPages.length} URLs)`);
        }
        
        if (categories.length > 0) {
          writeFileSync(join(outDir, 'sitemap-taxonomies-category-1.xml'), generateUrlSet(categories));
          sitemapsGenerated.push('sitemap-taxonomies-category-1.xml');
          logger.info(`Generated sitemap-taxonomies-category-1.xml (${categories.length} URLs)`);
        }
        
        if (tags.length > 0) {
          writeFileSync(join(outDir, 'sitemap-taxonomies-post_tag-1.xml'), generateUrlSet(tags));
          sitemapsGenerated.push('sitemap-taxonomies-post_tag-1.xml');
          logger.info(`Generated sitemap-taxonomies-post_tag-1.xml (${tags.length} URLs)`);
        }
        
        if (authors.length > 0) {
          writeFileSync(join(outDir, 'sitemap-users-1.xml'), generateUrlSet(authors));
          sitemapsGenerated.push('sitemap-users-1.xml');
          logger.info(`Generated sitemap-users-1.xml (${authors.length} URLs)`);
        }
        
        // Generate sitemap index
        writeFileSync(join(outDir, 'sitemap.xml'), generateSitemapIndex(sitemapsGenerated, siteUrl));
        logger.info(`Generated sitemap.xml index with ${sitemapsGenerated.length} sitemaps`);
      }
    }
  };
}
