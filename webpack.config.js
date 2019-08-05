const path = require('path');

module.exports = {
	// mode: 'production',
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'sword'
	},
	optimization: {
		usedExports: true
	}
};