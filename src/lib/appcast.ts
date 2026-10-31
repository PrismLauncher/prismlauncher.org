import { getCollection, type CollectionEntry } from "astro:content";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

const DEFAULT_URL = new URL("https://prismlauncher.org");

const processor = remark()
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

type NewsEntry = CollectionEntry<"news">;
type NewsData = NewsEntry["data"];

export type MacOSArchitecture = "arm64" | "x86_64";

type AppcastVariant = {
	feedName: string;
	titleSuffix: string;
	defaultFileExtension: string;
	getSignature: (data: NewsData) => string | undefined;
	getFileExtension: (data: NewsData) => string | undefined;
};

const defaultReleaseURL = (
	releaseVersion: string,
	fileExtension: string,
	architecture?: MacOSArchitecture,
) =>
	`https://github.com/PrismLauncher/PrismLauncher/releases/download/${releaseVersion}/PrismLauncher-macOS-${architecture ? `${architecture}-` : ""}${releaseVersion}.${fileExtension}`;

const VARIANTS: Record<"legacy" | MacOSArchitecture, AppcastVariant> = {
	legacy: {
		feedName: "appcast.xml",
		titleSuffix: "macOS",
		defaultFileExtension: "tar.gz",
		getSignature: (data) => data.macos_signature,
		getFileExtension: (data) => data.macos_file_extension,
	},
	arm64: {
		feedName: "appcast-arm64.xml",
		titleSuffix: "macOS arm64",
		defaultFileExtension: "zip",
		getSignature: (data) => data.macos_arm64_signature,
		getFileExtension: (data) =>
			data.macos_arm64_file_extension ?? data.macos_file_extension,
	},
	x86_64: {
		feedName: "appcast-x86_64.xml",
		titleSuffix: "macOS x86_64",
		defaultFileExtension: "zip",
		getSignature: (data) => data.macos_x86_64_signature,
		getFileExtension: (data) =>
			data.macos_x86_64_file_extension ?? data.macos_file_extension,
	},
};

const getMacOSBuild = (entry: NewsEntry, variant: keyof typeof VARIANTS) => {
	const data = entry.data;
	const releaseVersion = data.release_version;
	if (!releaseVersion) {
		return undefined;
	}

	const { getSignature, getFileExtension, defaultFileExtension } =
		VARIANTS[variant];
	const signature = getSignature(data);
	if (!signature) {
		return undefined;
	}

	const fileExtension = getFileExtension(data) ?? defaultFileExtension;
	const architecture = variant === "legacy" ? undefined : variant;
	return {
		signature,
		url: defaultReleaseURL(releaseVersion, fileExtension, architecture),
	};
};

export async function buildAppcast({
	site = DEFAULT_URL,
	variant,
}: {
	site?: URL;
	variant: keyof typeof VARIANTS;
}): Promise<Response> {
	const { feedName, titleSuffix } = VARIANTS[variant];
	const feedLink = new URL(`/feed/${feedName}`, site).toString();
	const posts = (await getCollection("news", ({ data }) => !data.draft))
		.filter((entry) => getMacOSBuild(entry, variant) !== undefined)
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

	const items = await Promise.all(
		posts.map(async (entry) => {
			const data = entry.data;
			const build = getMacOSBuild(entry, variant);
			if (!build) {
				return "";
			}

			const link = new URL(`/news/${data.slug || entry.slug}`, site).toString();
			const minMac = data.minimum_macos_version
				? `\n    <sparkle:minimumSystemVersion>${data.minimum_macos_version}</sparkle:minimumSystemVersion>`
				: "";

			// TODO: use Astro's .render() in the future
			const content = String(await processor.process(entry.body))
				.replace(/href="\/([^"]*)"/g, `href="${site}$1"`)
				.replace(/src="\/([^"]*)"/g, `src="${site}$1"`)
				.replace(/href="#([^"]+)"/g, `href="${link}/#$1"`);

			return `  <item>
    <title>${data.title} (${titleSuffix})</title>
    <link>${link}</link>
    <sparkle:version>${data.release_version}</sparkle:version>
    <description><![CDATA[${content}]]></description>
    <pubDate>${data.date.toISOString()}</pubDate>${minMac}
    <enclosure sparkle:os="macos" url="${build.url}" length="0" type="application/octet-stream" sparkle:edSignature="${build.signature}"/>
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
}
