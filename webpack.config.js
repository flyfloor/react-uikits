var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var publicPath = process.env.NODE_ENV === 'dev' ? '/dist/' : '';
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

module.exports = {
    entry: "./entre.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: publicPath
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ForceCaseSensitivityPlugin(),
        // new ExtractTextPlugin("app.css"),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ],
    module: {
        loaders: [
            { 
                test: /\.less$/,
                loader: "style!css!less", // ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, { 
                test: /\.css$/,
                loader: "style!css" // ExtractTextPlugin.extract("style-loader", "css-loader") 
            }, { 
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=./image/[name].[ext]' 
            },  { 
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'url-loader?limit=10000&name=./font/[name].[ext]'
            }
        ]
    },
    
};