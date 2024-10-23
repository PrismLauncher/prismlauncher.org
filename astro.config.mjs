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
			social: {
				github: 'https://github.com/PrismLauncher/PrismLauncher',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
