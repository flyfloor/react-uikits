var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.base');

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
    new webpack.optimize.CommonsChunkPlugin({ name: "vendors", filename: "vendor.js"}),
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
                    plugins: loaders => [
                        require('autoprefixer')()
                    ]
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
                    plugins: loaders => [
                        require('autoprefixer')()
                    ]
                }
            },
            'less-loader',
        ]
    })
})

module.exports = config