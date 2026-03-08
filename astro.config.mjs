// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import organizedSitemap from './src/integrations/organized-sitemap.mjs';

const site = process.env.SITE || 'https://powerbi.tips';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  image: {
    formats: ['avif', 'webp'],
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
    '/theme-generator/powerbi-tips-tools-now-in-fabric/': '/power-designer/',
    '/2026/03/07/is-power-bi-desktop-a-dev-tool-ep-376/': '/2024/11/29/is-power-bi-desktop-a-dev-tool-ep-376/',
    '/2024/11/27/mailbag-more-datamarts-power-bi-tips-ep375/': '/2024/11/27/mailbag-more-datamarts-ep-375/',
    '/2024/11/22/the-power-of-a-good-agenda-ep-374-power-bi-tips-ep-374/': '/2024/11/22/the-power-of-a-good-agenda-ep-374/',
  },
  compressHTML: true,
});
