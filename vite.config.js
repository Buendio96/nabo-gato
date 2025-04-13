import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({

	server: {
		port: 3000
	},

	plugins: [
		ViteImageOptimizer({
			png: {
				quality: 80,
			},
			jpeg: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
		}),
	],

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: true,
	},


})
