const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: '/',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // For react
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
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
  ],
  devServer: {
    historyApiFallback: true,
  },
};