const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js", // bundle's entry point
    output: {
        path: path.resolve(__dirname, 'build'), // output directory
        filename: "[name].js" // name of the generated bundle - dynamic
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpg|svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
            filename: "index.html",
            manifest: "./public/manifest.json",
        }),
        new MiniCssExtractPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: true,
        compress: true
    }
};