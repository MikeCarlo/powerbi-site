import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default(['PowerBI.tips']),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featuredImage: image().optional(),
    excerpt: z.string().optional()
  })
});

export const collections = { blog };
