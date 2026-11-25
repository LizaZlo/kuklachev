const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: [
		// Вендорные префиксы (-webkit-, -moz- и т.д.) по caniuse
		autoprefixer,
		// Минификация CSS только при build — в dev стили читаются в DevTools как в исходниках
		...(production ? [cssnano({ preset: 'default' })] : []),
	],
};
