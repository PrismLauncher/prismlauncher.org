import type { APIRoute } from "astro";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { getCollection, type CollectionEntry } from "astro:content";

interface Post {
	title: string;
	url: string;
	date: string;
	description: string;
	content: string;
}

const FEED_CONFIG = {
	title: "Prism Launcher",
	subtitle:
		"An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and mods. Focused on user freedom and free redistributability.",
	email: "contact@prismlauncher.org",
} as const;

const processor = remark()
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

const escapeXml = (text: string): string =>
	text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

async function processPost(
	post: CollectionEntry<"news">,
	siteUrl: string,
): Promise<Post> {
	const slug = post.data.slug || post.slug;

	try {
		const content = String(await processor.process(post.body))
			.replace(/href="\/([^"]*)"/g, `href="${siteUrl}$1"`)
			.replace(/src="\/([^"]*)"/g, `src="${siteUrl}$1"`)
			.replace(/href="#([^"]+)"/g, `href="${siteUrl}news/${slug}/#$1"`);

		return {
			title: post.data.title,
			url: `${siteUrl}news/${slug}/`,
			date: post.data.date.toISOString(),
			description: post.data.description,
			content,
		};
	} catch (error) {
		console.warn(`Failed to process post "${post.data.title}":`, error);
		return {
			title: post.data.title,
			url: `${siteUrl}news/${slug}/`,
			date: post.data.date.toISOString(),
			description: post.data.description || "No description available",
			content: `<p>${escapeXml(post.data.description || "No description available")}</p>`,
		};
	}
}

function generateFeed(
	entries: Post[],
	siteUrl: string,
	updated: string,
	short: boolean,
): string {
	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>${FEED_CONFIG.title}</title>
	<subtitle>${FEED_CONFIG.subtitle}</subtitle>
	<link href="${siteUrl}feed/feed.xml" rel="self"/>
	<link href="${siteUrl}"/>
	<updated>${updated}</updated>
	<id>${siteUrl}</id>
	<author>
		<name>${FEED_CONFIG.title}</name>
		<email>${FEED_CONFIG.email}</email>
	</author>
${entries
	.map((entry) => {
		let content = short
			? `<content type="string">${escapeXml(entry.description)}</content>`
			: `<content type="html">${escapeXml(entry.content)}</content>`;
		return `	<entry>
		<title>${escapeXml(entry.title)}</title>
		<link href="${entry.url}"/>
		<updated>${entry.date}</updated>
		<id>${entry.url}</id>
		${content}
	</entry>`;
	})
	.join("\n")}
</feed>`;
}

export const GET: APIRoute = async ({ site, params: { feedName } }) => {
	if (feedName !== "feed" && feedName !== "short") {
		return new Response(null, {
			status: 404,
		});
	}
	try {
		const posts = (await getCollection("news", ({ data }) => !data.draft)).sort(
			(a, b) => b.data.date.getTime() - a.data.date.getTime(),
		);
		const siteUrl =
			(site?.toString() || "https://prismlauncher.org/").replace(/\/$/, "") +
			"/";

		return new Response(
			generateFeed(
				await Promise.all(posts.map((post) => processPost(post, siteUrl))),
				siteUrl,
				(posts[0]?.data.date || new Date()).toISOString(),
				feedName === "short",
			),
			{
				headers: {
					"Content-Type": "application/atom+xml; charset=utf-8",
					"Cache-Control": "public, max-age=3600",
				},
			},
		);
	} catch (error) {
		console.error("Feed generation failed:", error);
		return new Response(
			import.meta.env.DEV
				? `Feed error: ${error instanceof Error ? error.message : "Unknown error"}`
				: "Internal Server Error",
			{
				status: 500,
				headers: { "Content-Type": "text/plain" },
			},
		);
	}
};

export const getStaticPaths = () => {
	return [{ params: { feedName: "feed" } }, { params: { feedName: "short" } }];
};
