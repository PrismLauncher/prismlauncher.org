// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
	site: "https://prismlauncher.org",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [icon(), sitemap(), mdx()],
});
