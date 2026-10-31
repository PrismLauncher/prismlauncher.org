import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	news: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string().min(1, "title is required"),
			description: z.string().min(1, "description is required"),
			date: z.date(),
			slug: z.string().optional(),
			release_version: z.string().optional(),
			minimum_macos_version: z.string().optional(),
			// Legacy/universal macOS appcast (/feed/appcast.xml)
			macos_file_extension: z.string().optional(),
			macos_signature: z.string().optional(),
			// Architecture-specific macOS appcasts (/feed/appcast-arm64.xml and /feed/appcast-x86_64.xml)
			macos_arm64_file_extension: z.string().optional(),
			macos_arm64_signature: z.string().optional(),
			macos_x86_64_file_extension: z.string().optional(),
			macos_x86_64_signature: z.string().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),
			draft: z.boolean().default(false),
		}),
	}),
};
