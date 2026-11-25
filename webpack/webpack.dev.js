const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	// Быстрые source maps для отладки в браузере
	devtool: 'eval-source-map',
	devServer: {
		// Для одностраничного лендинга все маршруты отдают index.html
		historyApiFallback: true,
		static: path.resolve(__dirname, '..', 'dist'),
		port: 8080,
		open: true,
		// HMR + React Refresh (плагин ниже) — правки без полной перезагрузки
		hot: true,
	},
	plugins: [
		// Клиентская часть Fast Refresh; в ts-loader включён react-refresh-typescript
		new ReactRefreshWebpackPlugin(),
	],
};
