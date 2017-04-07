var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['./src/main.js','./src/styles.scss'],
	output: { path: __dirname + '/src/dist', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: ['*','.js','.jsx']
	}
};
