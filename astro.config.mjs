// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'KingdomBlocks Wiki',
            defaultLocale: 'root',
            locales: {
                root: { label: 'Deutsch', lang: 'de' },
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/kingdomblocks/wiki' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/WZ369BJ7fR' },
            ],
            editLink: {
                baseUrl: 'https://github.com/kingdomblocks/wiki/edit/main/',
            },
            customCss: [
                './src/styles/custom.css',
            ],
            components: {
                Head: './src/components/Head.astro',
            },
            sidebar: [
                {
                    label: 'Startseite',
                    link: '/',
                },
                {
                    label: 'Allgemein',
                    autogenerate: { directory: 'allgemein' },
                },
                {
                    label: 'Funktionen',
                    autogenerate: { directory: 'funktionen' },
                },
                {
                    label: 'Spielmodi',
                    autogenerate: { directory: 'spielmodi' },
                },
                {
                    label: 'Befehle',
                    autogenerate: { directory: 'befehle' },
                },
            ],
        }),
        compress({
            CSS: true,
            HTML: {
                removeAttributeQuotes: false,
                removeComments: true,
            },
            Image: false,
            JavaScript: true,
            SVG: false,
        }),
    ],
});
