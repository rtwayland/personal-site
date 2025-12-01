import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
	plugins: [pluginReact()],
	tools: {
		rspack: {
			plugins: [
				tanstackRouter({
					target: 'react',
					autoCodeSplitting: true,
				}),
			],
		},
	},
	html: {
		title: 'Raleigh Wayland',
		favicon: './public/favicon.ico',
		meta: {
			description: "Raleigh Wayland's Personal Website",
		},
		tags: [
			{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
			{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
			{
				tag: 'link',
				attrs: {
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap',
				},
			},
		],
	},
	output: {
		distPath: 'build',
	},
});
