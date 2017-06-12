var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.base');

config.PORT = 8080;

config.entry = {
    app: "./src/entre.js",
    vendors: ['react', 'react-dom', 'react-router', 'react-ui-component'],
};

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '',
};

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new ExtractTextPlugin("app.css"),
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendors", /* filename= */ "vendor.js"),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false, // remove all comments
        },
    })
)

config.module.loaders.unshift({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
})

config.module.loaders.unshift({
    test: /\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
})

module.exports = config
