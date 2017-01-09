var path = require('path');
var webpack = require('webpack');
var PROD = process.env.PROD_ENV == 1;

console.log('PROD: ' + PROD);

var plugins = [];

if(PROD) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	);
}

module.exports = {
	entry: './src/event-emitter.js',
	output: {
		path: __dirname,
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		],
		plugins: plugins
	}
};
