import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader'
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema'

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
	news: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
		schema: z.object({
			title: z.string().min(1, "title is required"),
			description: z.string().min(1, "description is required"),
			date: z.date(),
			slug: z.string().optional(),
			release_version: z.string().optional(),
			minimum_macos_version: z.string().optional(),
			macos_file_extension: z.string().optional(),
			macos_signature: z.string().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),
			draft: z.boolean().default(false),
		}),
	}),
};
