const webpack = require('webpack');
const path = require('path');


const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/app.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJSPlugin()
  ]
}