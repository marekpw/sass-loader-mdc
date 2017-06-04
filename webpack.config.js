
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve('src'),
    entry: {
        app: './main.scss'
    },
    output: {
        filename: '[name].[hash].js',
        path: resolve('dist')
    },

    resolve: {
        extensions: ['.js', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ],
    }
};