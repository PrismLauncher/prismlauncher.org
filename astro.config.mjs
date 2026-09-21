// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightAutoSidebar from 'starlight-auto-sidebar'

import { SOCIAL_LINKS } from "/src/data/social.ts";

export default defineConfig({
	site: process.env.DEPLOY_URL || "https://prismlauncher.org",
	output: "static",

	vite: {
		plugins: [tailwindcss()],
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

			plugins: [
				starlightAutoSidebar(),
				starlightSidebarTopics([
					{
						label: "Wiki",
						link: "/wiki/",
						icon: "open-book",
						items: [{ autogenerate: { directory: "wiki" } }],
					},
					{
						label: "Help Pages",
						link: "/help-pages/",
						icon: "question-circle",
						items: [{ autogenerate: { directory: "help-pages" } }],
					},
					{
						label: "Development",
						link: "/development/",
						icon: "seti:config",
						items: [{ autogenerate: { directory: "development" } }],
					},
				]),		
			],

			social: SOCIAL_LINKS.map(({ starlightIcon, label, href }) => ({
				icon: starlightIcon,
				label,
				href,
			})),
			// NOTE: This would conflict with our own 404
			disable404Route: true,
		}),
		icon(),
		sitemap(),
		mdx(),
	],
});
