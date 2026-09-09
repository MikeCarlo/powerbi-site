// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import organizedSitemap from './src/integrations/organized-sitemap.mjs';
import remarkPowerQuery from './src/remark-powerquery.mjs';
import rehypeSiteUtm from './src/rehype-site-utm.mjs';

const site = process.env.SITE || 'https://powerbi.tips';
const base = process.env.BASE_PATH || '/';
const blogDirectory = fileURLToPath(new URL('./src/content/blog/', import.meta.url));

// The legacy site used /YYYY/MM/slug/ post URLs. The Astro migration added the
// publication day, so generate redirects automatically to preserve old links,
// search rankings, and referral traffic without maintaining one entry per post.
/** @type {Record<string, string>} */
const legacyBlogRedirects = {};

/** @param {string} directory */
function addLegacyBlogRedirects(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      addLegacyBlogRedirects(entryPath);
      continue;
    }

    if (!/^index\.mdx?$/.test(entry.name)) continue;

    const currentSlug = relative(blogDirectory, directory).replaceAll('\\', '/');
    const match = currentSlug.match(/^(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/);
    if (!match) continue;

    // Convert /YYYY/MM/DD/slug/ into its former /YYYY/MM/slug/ route.
    const [, year, month, , slug] = match;
    legacyBlogRedirects[`/${year}/${month}/${slug}/`] = `/${currentSlug}/`;
  }
}

addLegacyBlogRedirects(blogDirectory);

// Clarity 404s and retired WordPress/WooCommerce paths. Destinations verified
// against src/content/blog and existing pages. trailingSlash: 'always' already
// treats /path and /path/ as one route — only list the slashed form (same as
// /tools/). /toolbox/ chains through /tools/ → /power-designer/; no loop.
// /blog/ → /posts/ is listed once (trailingSlash: 'always' treats /blog and
// /blog/ as the same Astro route; a slashless duplicate warns). Astro SSG
// emits an HTML meta-refresh page (HTTP 200). GitHub Pages cannot send a
// true 301. Fastly (same constraint as HTTP→HTTPS apex) must add:
//   /blog  and  /blog/  →  301  /posts/
const clarityRedirects = {
  '/blog/': '/posts/',
  '/recent/': '/posts/',
  '/toolbox/': '/tools/',
  '/themes/': '/tag/themes/',
  '/product-category/scrims/': '/2019/12/21/scrims-instructions/',
  '/product-category/layouts/': '/power-designer/',
  '/product-category/game/': '/posts/',
  '/2012/10/06/using-the-powerbi-scanner-api-to-manage-entire-metadata/':
    '/2021/10/06/using-the-power-bi-scanner-api-to-manage-tenants-entire-metadata/',
  // Junk suffixes after a real post slug (Clarity offenders). Astro SSG cannot
  // wildcard-strip /: /%3E tails, so these are explicit.
  '/2019/10/23/make-pbids-files/:&Make/': '/2019/10/23/make-pbids-files/',
  '/2019/10/23/make-pbids-files/%3A%26Make/': '/2019/10/23/make-pbids-files/',
  '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/:%3EWhy/':
    '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/',
  '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/:>Why/':
    '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/',
  '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/%3A%3EWhy/':
    '/2026/04/21/why-im-burning-down-every-saas-tool-in-my-business/',
};

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkPowerQuery, {}]],
    rehypePlugins: [rehypeSiteUtm],
    syntaxHighlight: {
      excludeLangs: ['m', 'powerquery', 'power-query'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  integrations: [mdx(), organizedSitemap()],
  redirects: {
    ...legacyBlogRedirects,
    ...clarityRedirects,
    // Bare /<slug>/ URLs that went live when Astro's glob loader used
    // frontmatter slug as the entry id. Keep those links working.
    '/power-bi-bookmarks-tips/': '/2021/06/22/power-bi-bookmarks-tips/',
    '/revolutionizing-power-bi-theme-building-with-new-ai-capabilities-in-tips/': '/2023/12/09/revolutionizing-power-bi-theme-building-with-new-ai-capabilities-in-tips/',
    '/exploring-the-power-of-semantic-link/': '/2024/07/26/exploring-the-power-of-semantic-link/',
    '/overcoming-challenges-in-the-center-of-excellence/': '/2024/07/30/overcoming-challenges-in-the-center-of-excellence/',
    '/devops-with-matthias-thierbach/': '/2025/07/21/devops-with-matthias-thierbach/',
    '/data-science-with-ginger-grant/': '/2025/07/21/data-science-with-ginger-grant/',
    '/two-things-happening-with-ai/': '/2026/02/04/two-things-happening-with-ai/',
    '/being-a-data-analyst-in-the-era-of-ai/': '/2026/02/04/being-a-data-analyst-in-the-era-of-ai/',
    '/tools/': '/power-designer/',
    '/tools/layouts/': '/2026/09/02/power-bi-layouts-pbir-gallery/',
    '/product/field-finder-tool/': 'https://github.com/PowerBI-tips/Power-BI-Field-Finder',
    '/product/business-ops/': '/2026/09/02/business-ops-moved-to-github/',
    '/product/business-ops-beta/': '/2026/09/02/business-ops-moved-to-github/',
    '/tools/report-theme-generator-v3/': '/power-designer/',
    '/theme-generator/powerbi-tips-tools-now-in-fabric/': '/power-designer/',
    '/2026/03/07/is-power-bi-desktop-a-dev-tool-ep-376/': '/2024/11/29/is-power-bi-desktop-a-dev-tool-ep-376/',
    '/2024/11/22/the-power-of-a-good-agenda-ep-374-power-bi-tips-ep-374/': '/2024/11/22/the-power-of-a-good-agenda-ep-374/',
  },
  compressHTML: true,
});
