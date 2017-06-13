var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');

var NODE_ENV = process.env.NODE_ENV || 'dev'
var config = require('./webpack.' + NODE_ENV);
var indexPath = __dirname + '/dist/' + NODE_ENV + '.html'

var app = new (express)();
var port = process.env.PORT || (process.argv[2] || 3000);

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

app.get("/", function(req, res) {
  res.sendFile(indexPath);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
