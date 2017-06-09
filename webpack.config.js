var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV
var publicPath = NODE_ENV === 'dev' ? '/dist/' : '';
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ForceCaseSensitivityPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(NODE_ENV)
        }
    }),
    new ExtractTextPlugin("app.css"),
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendors", /* filename= */ "vendor.js"),
]

if (NODE_ENV !== 'dev') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false, // remove all comments
        },
    }))
}

module.exports = {
    entry: {
        app: ["./entre.js", "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"],
        vendors: ['react', 'react-dom', 'react-router', 'react-ui-component'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: publicPath
    },
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=./image/[name].[ext]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel",
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=10000&name=./font/[name].[ext]'
        }]
    },

};