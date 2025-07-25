import { defineCollection, z } from "astro:content";

export const collections = {
	news: defineCollection({
		type: "content",
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
