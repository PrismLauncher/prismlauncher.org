// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Prism Development Wiki',
			logo: {
				light: './src/assets/logo-text-light.svg',
				dark: './src/assets/logo-text-dark.svg',
				replacesTitle: true
			},
			customCss: [
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/PrismLauncher/prismlauncher.org/tree/dev-wiki/',
			},
			social: {
				github: 'https://github.com/PrismLauncher/PrismLauncher',
			},
		}),
	],
});
