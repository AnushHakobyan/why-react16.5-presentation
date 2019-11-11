const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: [path.resolve(__dirname, 'dist')],
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    // { loader: 'eslint-loader' },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'url-loader',
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    },
                ],
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        new webpack.NamedModulesPlugin(),
    ]

};