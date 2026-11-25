const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// Склеиваем общий конфиг с dev или prod: npm start → env=dev, npm run build → env=prod
module.exports = (envVars) => {
	const { env } = envVars;
	const envConfig = require(`./webpack.${env}.js`);
	const config = merge(commonConfig, envConfig);
	return config;
};
