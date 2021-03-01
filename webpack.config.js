// set path
const path = require('path')

module.exports = {
    //  set mode
	mode: 'development', // productuion
    // set entry
	// entry: path.join(__dirname, 'app', 'index'),
	entry: './src/js/app.js',
    // set option watch
	watch: true,
    // set utput
	output: {
        // bundle file name
		filename: 'bundle.js',
        // output path
		// --- path: path.join(__dirname, 'dist'),
        path: path.join(__dirname, 'public/js')
		// publicPath: '/dist/',
		// chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				include: [ path.resolve(__dirname, 'app') ],
				exclude: [ path.resolve(__dirname, 'node_modules') ],
				loader: 'babel-loader',
				query: {
					presets: [
						[
							'@babel/env',
							{
								targets: {
									browsers: 'last 2 chrome versions',
								},
							},
						],
					],
				},
			},
		],
	},
	resolve: {
		extensions: [ '.json', '.js', '.jsx' ],
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, '/dist/'),
		inline: true,
		host: 'localhost',
		port: 8080,
	},
}
