var webpack = require('webpack');
var path = require('path');

var libraryName = 'sm-event-emitter';
var outputFile = libraryName + '.js';
var plugins = [];

var config = {
	entry: __dirname + '/src/index.js',
	devtool: 'source-map',
	output: {
		path: __dirname + '/lib',
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /(\.jsx|\.js)$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		root: path.resolve('./src'),
		extensions: ['', '.js']
	},
	plugins: plugins
};

module.exports = config;
