import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    category: z.string(),
    subcategory: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    postFormat: z.enum(['standard', 'gallery', 'image', 'video', 'audio', 'quote', 'link']).default('standard'),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
    audioUrl: z.string().optional(),
    quoteText: z.string().optional(),
    quoteAuthor: z.string().optional(),
    linkUrl: z.string().optional()
  })
});

export const collections = { blog };
