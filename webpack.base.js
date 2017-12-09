var webpack = require('webpack');
var path = require('path');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV

module.exports = {
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    resolve: {
        alias: {
            "react": path.resolve('./node_modules/react'),
            "react-router-dom": path.resolve('./node_modules/react-router-dom')
        },
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192&name=./image/[name].[ext]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: "babel-loader",
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader',
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'url-loader?limit=10000&name=./font/[name].[ext]'
        }],
    }
};