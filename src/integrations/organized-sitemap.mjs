/**
 * Custom sitemap integration that generates organized sitemaps like WordPress
 * Creates separate sitemaps for posts, pages, categories, tags, and authors
 */

import { readFileSync, readdirSync } from 'fs';
import { writeFileSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

/** YYYY-MM-DD (W3C date) or '' */
function day(value) {
  const d = value instanceof Date ? value : new Date(value);
  return Number.isNaN(d.valueOf()) ? '' : d.toISOString().slice(0, 10);
}

function maxDay(a, b) {
  if (!a) return b || '';
  if (!b) return a;
  return a > b ? a : b;
}

/**
 * Last commit date per repo file, from one `git log` pass. Empty map when git
 * history is missing or shallow (then callers fall back to frontmatter dates).
 */
function gitLastModified(repoRoot) {
  const map = new Map();
  try {
    const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: repoRoot }).toString().trim();
    if (shallow === 'true') return map;
    const out = execFileSync('git', ['log', '--format=@@%cI', '--name-only', '--no-renames', '--', 'src'], {
      cwd: repoRoot,
      maxBuffer: 256 * 1024 * 1024,
    }).toString();
    let current = '';
    for (const line of out.split('\n')) {
      if (line.startsWith('@@')) current = day(line.slice(2));
      else if (line && current && !map.has(line)) map.set(line, current);
    }
  } catch {
    /* no git: fall back */
  }
  return map;
}

/** Minimal frontmatter reader: date plus tags/categories/authors lists. */
function readFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = { date: '', tags: [], categories: [], authors: [] };
  if (!m) return fm;
  const lines = m[1].split(/\r?\n/);
  let listKey = '';
  const unquote = (v) => v.trim().replace(/^['"]|['"]$/g, '');
  for (const line of lines) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) {
      listKey = '';
      const [, key, rest] = kv;
      if (key === 'date') fm.date = day(unquote(rest));
      if (key in fm && key !== 'date') {
        if (rest.trim().startsWith('[')) {
          fm[key] = rest.trim().replace(/^\[|\]$/g, '').split(',').map(unquote).filter(Boolean);
        } else if (!rest.trim()) {
          listKey = key;
        } else {
          fm[key] = [unquote(rest)];
        }
      }
      continue;
    }
    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && listKey) fm[listKey].push(unquote(item[1]));
  }
  return fm;
}

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

/**
 * lastmod per site path (no leading slash, trailing slash), built from the
 * blog content: posts use max(frontmatter date, last git commit of the file);
 * category/tag/author archives use their newest post; listing pages use the
 * newest post overall; other static pages use their source file's last commit.
 */
function buildLastmodIndex(repoRoot) {
  const git = gitLastModified(repoRoot);
  const blogDir = join(repoRoot, 'src', 'content', 'blog');
  const byPath = new Map();
  const terms = { category: new Map(), tag: new Map(), author: new Map() };
  let newest = '';

  const bump = (map, key, value) => map.set(key, maxDay(map.get(key), value));

  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/^index\.mdx?$/.test(entry.name)) continue;
      const slug = relative(blogDir, dir).replaceAll('\\', '/');
      const fm = readFrontmatter(readFileSync(full, 'utf8'));
      const repoPath = relative(repoRoot, full).replaceAll('\\', '/');
      const lastmod = maxDay(fm.date, git.get(repoPath));
      byPath.set(`${slug}/`, lastmod);
      newest = maxDay(newest, fm.date);
      fm.categories.forEach((c) => bump(terms.category, String(c).toLowerCase().replace(/\s+/g, '-'), fm.date));
      fm.tags.forEach((t) => bump(terms.tag, slugify(t), fm.date));
      fm.authors.forEach((a) => bump(terms.author, slugify(a), fm.date));
    }
  };
  walk(blogDir);

  const buildDay = day(new Date());

  /** @param {string} path site path without leading slash */
  return function lastmodFor(path) {
    const p = path.replace(/^\//, '').replace(/\/?$/, '/');
    if (byPath.has(p)) return byPath.get(p);
    const tax = p.match(/^(category|tag|author)\/([^/]+)\//);
    if (tax) {
      let term = tax[2];
      try {
        term = decodeURIComponent(term);
      } catch {
        /* keep raw */
      }
      if (terms[tax[1]].has(term)) return terms[tax[1]].get(term);
    }
    // Home, /posts/, pagination, and other post listings change with the newest post.
    if (p === '/' || /^(posts|page|podcast|search)\//.test(p)) return newest || buildDay;
    const name = p.replace(/\/$/, '');
    for (const ext of ['astro', 'md', 'mdx']) {
      const g = git.get(`src/pages/${name}.${ext}`) || git.get(`src/pages/${name}/index.${ext}`);
      if (g) return g;
    }
    return newest || buildDay;
  };
}

function generateUrlSet(entries) {
  const urlEntries = entries
    .map(({ loc, lastmod }) => `  <url>
    <loc>${loc}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateSitemapIndex(sitemaps, siteUrl) {
  const entries = sitemaps
    .map(({ name, lastmod }) => {
      const loc = new URL(name, siteUrl).toString();
      return `  <sitemap>
    <loc>${loc}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
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

        const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
        const lastmodFor = buildLastmodIndex(repoRoot);

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

          const fullUrl = { loc: new URL(path || '.', siteUrl).toString(), lastmod: lastmodFor(path || '/') };

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
        const newestOf = (list) => list.reduce((acc, e) => maxDay(acc, e.lastmod), '');

        // Generate individual sitemaps
        if (posts.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-posts-post-1.xml'), generateUrlSet(posts));
          sitemapsGenerated.push({ name: 'wp-sitemap-posts-post-1.xml', lastmod: newestOf(posts) });
          logger.info(`Generated wp-sitemap-posts-post-1.xml (${posts.length} URLs)`);
        }

        if (staticPages.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-posts-page-1.xml'), generateUrlSet(staticPages));
          sitemapsGenerated.push({ name: 'wp-sitemap-posts-page-1.xml', lastmod: newestOf(staticPages) });
          logger.info(`Generated wp-sitemap-posts-page-1.xml (${staticPages.length} URLs)`);
        }

        if (categories.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-taxonomies-category-1.xml'), generateUrlSet(categories));
          sitemapsGenerated.push({ name: 'wp-sitemap-taxonomies-category-1.xml', lastmod: newestOf(categories) });
          logger.info(`Generated wp-sitemap-taxonomies-category-1.xml (${categories.length} URLs)`);
        }

        if (tags.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-taxonomies-post_tag-1.xml'), generateUrlSet(tags));
          sitemapsGenerated.push({ name: 'wp-sitemap-taxonomies-post_tag-1.xml', lastmod: newestOf(tags) });
          logger.info(`Generated wp-sitemap-taxonomies-post_tag-1.xml (${tags.length} URLs)`);
        }

        if (authors.length > 0) {
          writeFileSync(join(outDir, 'wp-sitemap-users-1.xml'), generateUrlSet(authors));
          sitemapsGenerated.push({ name: 'wp-sitemap-users-1.xml', lastmod: newestOf(authors) });
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
