import type { APIRoute } from "astro";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { getCollection } from "astro:content";
import { Feed } from "feed";

const DEFAULT_URL = new URL("https://prismlauncher.org");

const processor = remark()
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

export const GET: APIRoute = async ({
	site = DEFAULT_URL,
	url,
	params: { feedName },
}) => {
	if (feedName !== "feed" && feedName !== "short") {
		return new Response(null, {
			status: 404,
		});
	}

	const feed = new Feed({
		title: "Prism Launcher",
		description:
			"An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and mods. Focused on user freedom and free redistributability.",
		id: site.toString(),
		feed: url.toString(),
		copyright: "AGPL-3.0",
		language: "en",
		image: `${site.toString()}/img/favicon.png`,
	});

	const posts = await getCollection("news", ({ data }) => !data.draft).then(
		(posts) =>
			posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()),
	);

	for (const post of posts) {
		const slug = post.data.slug || post.slug;
		const link = new URL(`/news/${slug}`, site).toString();

		// TODO: use Astro's .render() in the future
		const content = String(await processor.process(post.body))
			.replace(/href="\/([^"]*)"/g, `href="${site}$1"`)
			.replace(/src="\/([^"]*)"/g, `src="${site}$1"`)
			.replace(/href="#([^"]+)"/g, `href="${link}/#$1"`);

		feed.addItem({
			title: post.data.title,
			id: link,
			link,
			date: post.data.date,
			description: post.data.description,
			content: feedName === "short" ? undefined : content,
			author: [
				{
					name: "Prism Launcher Team",
				},
			],
		});
	}

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};

export const getStaticPaths = () => {
	return [{ params: { feedName: "feed" } }, { params: { feedName: "short" } }];
};
