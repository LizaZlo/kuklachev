const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const path = require('path');
const webpack = require('webpack');

// NODE_ENV задаётся в package.json: development при start, production при build
const production = process.env.NODE_ENV === 'production';

module.exports = {
	// Точка входа: монтируем React в #root из public/index.html
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: production
			? 'static/scripts/[name].[contenthash].js'
			: 'static/scripts/[name].js',
		// В production относительные пути — чтобы dist открывался с GitHub Pages
		publicPath: production ? './' : '/',
	},
	module: {
		rules: [
			{
				// TypeScript и TSX из src (кроме node_modules)
				test: /\.[tj]sx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							// В dev добавляем метки React Refresh без отдельного Babel
							getCustomTransformers: () => ({
								before: production ? [] : [ReactRefreshTypeScript()],
							}),
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				// Растровые картинки — отдельные файлы в dist/static/images
				test: /\.(png|jpe?g|gif|webp|avif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[hash][ext][query]',
				},
			},
			{
				// Шрифты из src (часто из shared/assets/fonts)
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[hash][ext][query]',
				},
			},
			{
				// SVG: строка URL + компонент ReactComponent при импорте из TSX
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				// Глобальные .scss/.css и CSS Modules (*.module.scss)
				test: /\.(sa|sc|c)ss$/,
				use: [
					// В prod CSS в отдельных файлах, в dev — через style-loader в память
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]',
								// Модули только у файлов *.module.scss / *.module.css
								auto: /\.module\.\w+$/i,
							},
							// postcss-loader и sass-loader отрабатывают до css-loader
							importLoaders: 2,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
	},
	plugins: [
		// Подставляет скрипты и стили в HTML из public/index.html
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
		// Очищает dist перед каждой сборкой
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: production
				? 'static/styles/[name].[contenthash].css'
				: 'static/styles/[name].css',
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development',
		}),
		// favicon и прочее из public/ (кроме index.html) → dist
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '..', 'public'),
					globOptions: {
						ignore: ['**/index.html'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
