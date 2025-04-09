import path from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({

	base: './',
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

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@locales': path.resolve(__dirname, 'src/locales'),
			'@scripts': path.resolve(__dirname, 'src/scripts'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
})
