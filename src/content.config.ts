import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

// 📸 孩子们的影像地带 (Gallery) 集合定义
const gallery = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{json,md}", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["image", "video"]).default("image"),
    mediaUrl: z.string(),
    posterUrl: z.string().optional(),
    child: z.enum(["haoran", "xinran", "family"]).default("family"),
    date: z.date().or(z.string()),
    location: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, pages, gallery };
