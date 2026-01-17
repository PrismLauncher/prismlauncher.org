// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

import starlight from "@astrojs/starlight";

export default defineConfig({
	site: process.env.DEPLOY_URL || "https://prismlauncher.org",
	output: "static",
	adapter: cloudflare(),

	vite: {
		plugins: [tailwindcss()],
	},

	redirects: {
		"/discord": "https://discord.gg/ArX2nafFz2",
		"/github": "https://github.com/PrismLauncher/PrismLauncher",
		"/mastodon": "https://floss.social/@PrismLauncher",
		"/matrix": "https://matrix.to/#/#prismlauncher:matrix.org",
		"/reddit": "https://www.reddit.com/r/PrismLauncher/",
		"/twitter": "https://twitter.com/PrismLauncher",
		"/bluesky": "https://bsky.app/profile/prismlauncher.org",
	},

	integrations: [
		starlight({
			title: "Prism Launcher Wiki",

			customCss: ["./src/styles/starlight.css"],

			expressiveCode: {
				themes: ["github-light", "github-dark"],
				styleOverrides: { borderRadius: "0.5rem" },
			},

			logo: {
				light: "./public/img/logo-textLight.svg",
				dark: "./public/img/logo-textDark.svg",
				replacesTitle: true,
			},

			// NOTE(@getchoo): required-ish to avoid our categories all being in one "Wiki" category
			//
			// Usually Starlight would handle this nicely, but since we want everything under a
			// nice `/wiki` endpoint, this will do
			//
			// TODO(@ZekeZ)
			// There is a better way to do this if I remember correctly and I will need to investigate further.
			sidebar: [
				{
					label: "Overview",
					autogenerate: {
						directory: "wiki/overview",
					},
				},
				{
					label: "Getting Started",
					autogenerate: {
						directory: "wiki/getting-started",
					},
				},
				{
					label: "Help pages",
					autogenerate: {
						collapsed: true,
						directory: "wiki/help-pages",
					},
				},
				"wiki/branding",
				{
					label: "Development",
					autogenerate: {
						directory: "wiki/development",
					},
				},
			],

			social: [
				{
					icon: "mastodon",
					label: "Mastodon",
					href: "https://floss.social/@PrismLauncher",
				},
				{
					icon: "blueSky",
					label: "Bluesky",
					href: "https://bsky.app/profile/prismlauncher.org",
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/ArX2nafFz2",
				},
				{
					icon: "matrix",
					label: "Matrix",
					href: "https://matrix.to/#/#prismlauncher:matrix.org",
				},
				{
					icon: "reddit",
					label: "Reddit",
					href: "https://www.reddit.com/r/PrismLauncher/",
				},
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/PrismLauncher/PrismLauncher",
				},
				{
					icon: "email",
					label: "E-mail",
					href: "mailto:contact@prismlauncher.org",
				},
			],

			// NOTE: This would conflict with our own 404
			disable404Route: true,
		}),
		icon(),
		sitemap(),
		mdx(),
	],
});
