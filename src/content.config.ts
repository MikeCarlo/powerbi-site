import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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
