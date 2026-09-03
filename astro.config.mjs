// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import organizedSitemap from './src/integrations/organized-sitemap.mjs';
import remarkPowerQuery from './src/remark-powerquery.mjs';

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

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkPowerQuery, {}]],
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
