// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import organizedSitemap from './src/integrations/organized-sitemap.mjs';

const site = process.env.SITE || 'https://mikecarlo.github.io';
const base = process.env.BASE_PATH || '/powerbi-site';

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
  compressHTML: true,
});