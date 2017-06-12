var path = require('path');
var webpack = require('webpack');
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

var config = require('./webpack.base');

config.PORT = 3000;

config.entry = {
    app: ["./src/entre.js", "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false"],
};

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
}

config.module.loaders.unshift({
    test: /\.css$/,
    loader: 'style-loader!css-loader',
})

config.module.loaders.unshift({
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader',
})

config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ForceCaseSensitivityPlugin()
);

module.exports = config;