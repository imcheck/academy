const webpack = require('webpack');
const path = require('path');


const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  resolve: {
    alias: {
      "@containers": path.resolve(__dirname, '..', 'src', 'containers'),
      "@redux": path.resolve(__dirname, '..', 'src', 'redux')
    },
    extensions: ['.js', '.jsx']
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
  plugins: [new UglifyJSPlugin()]
}