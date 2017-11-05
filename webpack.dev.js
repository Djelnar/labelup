var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    devtool: "eval", //or cheap-module-eval-source-map
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "src"),
            manifest: require("./dll/vendor-manifest.json")
        }),
    ],
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: "babel-loader",
              include: [
                  path.join(__dirname, "src")
              ],
              query: {
                  cacheDirectory: true,
                  plugins: ["transform-class-properties", "transform-object-rest-spread"],
                  presets: ["react", "es2015"]
              }
            },
            {
              test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 0 } }
              ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ]
    },
	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		historyApiFallback: true,
    port: 3000,
		proxy: {
		
		},
    open: true,
    }
};