const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ],
    devServer: {
        port: 9000
    }
};




