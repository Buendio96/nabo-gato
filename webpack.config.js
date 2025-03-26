const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-bundle-[hash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			favicon: '',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
			},
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
			},
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new CopyPlugin({
			patterns: [
				{ from: "src/assets/fonts", to: "assets/fonts" }
			],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		port: 3000,
		hot: true,
	},
	resolve: {
		extensions: [
			'.html', '.js', '.json', '.css', '.scss', '.svg'
		],
		alias: {
			js: path.resolve(__dirname, 'src/scripts'),
			style: path.resolve(__dirname, 'src/styles'),
			local: path.resolve(__dirname, 'src/locales'),
			icons: path.resolve(__dirname, 'src/assets/icons'),
			images: path.resolve(__dirname, 'src/assets/images'),
		}
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.m?js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { url: false },
					},
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}, {
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				use: [{
					loader: 'image-webpack-loader',
					options: {
						mozjpeg: {
							progressive: true,
						},
						optipng: {
							enabled: false,
						},
						pngquant: {
							quality: [0.65, 0.90],
							speed: 4
						},
						gifsicle: {
							interlaced: false,
						},
						webp: {
							quality: 75
						}
					}
				}],
				type: 'asset/resource',
				generator: {
					filename: (pathData) => {
						const outputPath = pathData.filename.replace('src/', '')
						return `${outputPath}`
					}
				}
			}
		],
	}
}