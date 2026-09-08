/**
 * Custom sitemap integration that generates organized sitemaps like WordPress
 * Creates separate sitemaps for posts, pages, categories, tags, and authors
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

function generateUrlSet(urls) {
  const urlEntries = urls
    .map((url) => `  <url>
    <loc>${url}</loc>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateSitemapIndex(sitemaps, siteUrl) {
  const entries = sitemaps
    .map((name) => {
      const loc = new URL(name, siteUrl).toString();
      return `  <sitemap>
    <loc>${loc}</loc>
  </sitemap>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

function normalizeSiteUrl(site, base) {
  const siteRoot = (site || '').replace(/\/$/, '');
  let b = base || '/';

  // Ensure leading slash
  if (!b.startsWith('/')) b = `/${b}`;

  // Ensure trailing slash
  if (!b.endsWith('/')) b = `${b}/`;

  // Collapse '//' to '/'
  if (b === '//') b = '/';

  return `${siteRoot}${b}`;
}

export default function organizedSitemap() {
  return {
    name: 'organized-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages, logger }) => {
        const astroConfig = (await import('../../astro.config.mjs')).default;

        // Prefer runtime env, else Astro config, else hard default.
        // (This used to default to the old GitHub Pages domain, which caused the wp-sitemap.xml index to point off-site.)
        const site = process.env.SITE || astroConfig?.site || 'https://powerbi.tips';
        const base = process.env.BASE_PATH || astroConfig?.base || '/';
        const siteUrl = normalizeSiteUrl(site, base);

        const posts = [];
        const staticPages = [];
        const categories = [];
        const tags = [];
        const authors = [];

        const redirectPathnames = new Set(
          Object.keys(astroConfig?.redirects || {}).flatMap((from) => {
            const normalized = String(from).replace(/^\//, '');
            return [normalized, normalized.replace(/\/$/, ''), `${normalized.replace(/\/$/, '')}/`];
          })
        );

        /** @param {string} path */
        function isNotFoundPath(path) {
          const normalized = String(path || '').replace(/^\//, '').replace(/\/+$/, '');
          return normalized === '404' || normalized === '404.html';
        }

        /** @param {string} path */
        function isRedirectPath(path) {
          const normalized = String(path || '').replace(/^\//, '');
          return (
            redirectPathnames.has(normalized) ||
            redirectPathnames.has(normalized.replace(/\/$/, '')) ||
            redirectPathnames.has(`${normalized.replace(/\/$/, '')}/`)
          );
        }

        for (const page of pages) {
          const path = page.pathname;

          // Keep /404/ as a real error page; never list it for crawlers.
          if (isNotFoundPath(path) || isRedirectPath(path)) continue;

          const fullUrl = new URL(path || '.', siteUrl).toString();

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
          } else if (path !== 'category/' && path !== 'tag/' && path !== 'author/') {
            // Static pages (homepage pathname is '', plus about, training, etc.)
            staticPages.push(fullUrl);
          }
        }

        const outDir = fileURLToPath(dir);
        const sitemapsGenerated = [];

        // Generate individual sitemaps
        if (posts.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-posts-post-1.xml'), generateUrlSet(posts));
          sitemapsGenerated.push('wp-sitemap-posts-post-1.xml');
          logger.info(`Generated wp-sitemap-posts-post-1.xml (${posts.length} URLs)`);
        }

        if (staticPages.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-posts-page-1.xml'), generateUrlSet(staticPages));
          sitemapsGenerated.push('wp-sitemap-posts-page-1.xml');
          logger.info(`Generated wp-sitemap-posts-page-1.xml (${staticPages.length} URLs)`);
        }

        if (categories.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-taxonomies-category-1.xml'), generateUrlSet(categories));
          sitemapsGenerated.push('wp-sitemap-taxonomies-category-1.xml');
          logger.info(`Generated wp-sitemap-taxonomies-category-1.xml (${categories.length} URLs)`);
        }

        if (tags.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-taxonomies-post_tag-1.xml'), generateUrlSet(tags));
          sitemapsGenerated.push('wp-sitemap-taxonomies-post_tag-1.xml');
          logger.info(`Generated wp-sitemap-taxonomies-post_tag-1.xml (${tags.length} URLs)`);
        }

        if (authors.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-users-1.xml'), generateUrlSet(authors));
          sitemapsGenerated.push('wp-sitemap-users-1.xml');
          logger.info(`Generated wp-sitemap-users-1.xml (${authors.length} URLs)`);
        }

        // Generate sitemap index at both the live WordPress-era URL and /sitemap.xml
        const indexXml = generateSitemapIndex(sitemapsGenerated, siteUrl);
        writeFileSync(join(outDir, 'wp-sitemap.xml'), indexXml);
        writeFileSync(join(outDir, 'sitemap.xml'), indexXml);
        logger.info(`Generated wp-sitemap.xml and sitemap.xml index with ${sitemapsGenerated.length} sitemaps`);
      },
    },
  };
}
