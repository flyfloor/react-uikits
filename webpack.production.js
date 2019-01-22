var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./webpack.base');
config.mode = 'production'

config.entry = {
    app: "./src/entre.js",
    vendors: [
        'react', 
        'react-dom', 
        'react-router', 
        'react-router-dom', 
        'react-highlight',
        'react-ui-component', 
        'async-validator', 
        'immutability-helper', 
        'prop-types'
    ],
},

config.plugins.push(
    new ExtractTextPlugin("app.css"),
    new htmlWebpackPlugin({
        title: 'react-uikits 企业平台的组件化方案',
        template: './dist/template.html',
        inject: true,
        filename: '../index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: "vendors", filename: "vendors.js"}),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false, // remove all comments
        },
    })
)

config.module.rules.unshift({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [require('autoprefixer')]
                }
            }
        ]
    })
})

config.module.rules.unshift({
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [require('autoprefixer')]
                }
            },
            'less-loader',
        ]
    })
})

module.exports = config