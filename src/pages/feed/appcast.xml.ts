import type { APIRoute } from "astro";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { getCollection } from "astro:content";

const DEFAULT_URL = new URL("https://prismlauncher.org");

const processor = remark()
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

export const GET: APIRoute = async ({ site = DEFAULT_URL }) => {
	const feedLink = new URL("/feed/appcast.xml", site).toString();
	const posts = (await getCollection("news", ({ data }) => !data.draft))
		.filter(({ data }) => data.release_version && data.macos_signature)
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

	const items = await Promise.all(
		posts.map(async ({ data, slug, body }) => {
			const {
				release_version,
				minimum_macos_version,
				macos_file_extension,
				macos_signature,
			} = data;

			const link = new URL(`/news/${data.slug || slug}`, site).toString();
			const minMac = minimum_macos_version
				? `\n    <sparkle:minimumSystemVersion>${minimum_macos_version}</sparkle:minimumSystemVersion>`
				: "";

			// TODO: use Astro's .render() in the future
			const content = String(await processor.process(body))
				.replace(/href="\/([^"]*)"/g, `href="${site}$1"`)
				.replace(/src="\/([^"]*)"/g, `src="${site}$1"`)
				.replace(/href="#([^"]+)"/g, `href="${link}/#$1"`);

			return `  <item>
    <title>${data.title} (macOS)</title>
    <link>${link}</link>
    <sparkle:version>${release_version}</sparkle:version>
    <description>${content}</description>
    <pubDate>${data.date.toISOString()}</pubDate>${minMac}
    <enclosure sparkle:os="macos" url="https://github.com/PrismLauncher/PrismLauncher/releases/download/${release_version}/PrismLauncher-macOS-${release_version}.${macos_file_extension || "tar.gz"}" length="0" type="application/octet-stream" sparkle:edSignature="${macos_signature}"/>
  </item>`;
		}),
	);

	return new Response(
		`<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Prism Launcher</title>
    <link>${feedLink}</link>
    <language>en</language>
${items.join("\n")}
  </channel>
</rss>`,
		{
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		},
	);
};
