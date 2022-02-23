const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")

//directories
const BUILD_DIR = path.join(__dirname, 'build')
const APP_DIR = path.join(__dirname, 'src')

//vendor libs
const VENDOR_LIBS = ['react', 'react-dom',]

//exporting common configs
module.exports = {
    entry: {
        app: APP_DIR + "/index.js",
        vendor: VENDOR_LIBS
    },
    module: {
        rules: [
            {
                //for JavaScript
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                //for CSS
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                //for images
                test: /\.(jpg|svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext][query]",
                },
            },
            {
                //For favicon
                test: /\.(ico)$/,
                use: [
                    {
                        //using file-loader too
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        //for HTML
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: 'body',
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            manifest: path.resolve(__dirname, 'public', 'manifest.json'),
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./public/manifest.json", to: "manifest.json" },
                { from: "./public/favicon.png", to: "favicon.png" },
                { from: "./public/logo_Shubham.jpg", to: "logo_Shubham.jpg" },
                { from: "./public/robots.txt", to: "robots.txt" },
            ],
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[fullhash].js',
        pathinfo: false,
    },
}