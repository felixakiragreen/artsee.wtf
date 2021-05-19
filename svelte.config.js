import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//
		// adapter: node(),
		adapter: netlify(),
		//
		vite: {
			ssr: {
				// TODO: this needs to be in prod, but not dev
				noExternal: ['lodash'],
			},
			resolve: {
				// alias: [{ find: '@', replacement: '/src' }],
				alias: {
					'@': '/src',
				},
			},
			// build: {
			// 	outDir: 'build/',
			// },
			optimizeDeps: {
				include: ['svelte-hero-icons', 'lodash'],
				exclude: [],
			},
		},
	},
}

export default config
