const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.[contenthash].js",
		clean: true,
	},
	module: {
		rules: [
			{
				// For react
				test: /\.js|\.jsx$/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: "babel-loader",
				},
			},
			{
				// For css, just in case
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				// For scss
				test: /\.s[ac]ss$/i,
				include: path.resolve(__dirname, 'src'),
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new Dotenv({
			systemvars: true,
		}),
	]
};