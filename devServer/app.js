var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack/webpack.dev.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var app = express();
var compiler = webpack(config);

app.use(express.static('dist'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: 'normal',
}));

app.use(webpackHotMiddleware(compiler, {
  reload: true
}));

app.use('/', function (req, res) {
  var file = path.resolve(__dirname, '..', 'dist', 'index.html');
  res.sendFile(file);
})

app.listen(8080, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:8080/');
});