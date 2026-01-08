// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KingdomBlocks Wiki',
			defaultLocale: 'de', 
			locales: {
				de: { label: 'Deutsch', lang: 'de' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/kingdomblocks/wiki' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/WZ369BJ7fR' },
			],
			editLink: {
				baseUrl: 'https://github.com/kingdomblocks/wiki/edit/main/',
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
