import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    // Always use the file path as the entry id. Astro's default generateId
    // prefers a frontmatter `slug`, which would publish the post at /<slug>/
    // instead of /YYYY/MM/DD/<slug>/.
    generateId: ({ entry }) => entry,
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default(['PowerBI.tips']),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featuredImage: image().optional(),
    excerpt: z.string().optional(),
    // Set true to hide the floating promo popover on this post (e.g. it already has its own CTA).
    hidePromo: z.boolean().optional(),
    // Podcast episode extras (all optional; see .github/skills/tips-pod-post).
    // tldr: 35-42 words. faq: 3-5 voiced Q&A pairs, the only FAQPage source
    // on episode pages. related: up to 3 links, absolute https or root-relative.
    tldr: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).max(5).optional(),
    related: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().regex(/^(https:\/\/[^\s/]+\S*|\/(?!\/)\S*)$/, 'related.url must be an absolute https URL or a root-relative path')
        })
      )
      .max(3)
      .optional()
  })
});

export const collections = { blog };
