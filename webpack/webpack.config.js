const webpack = require("webpack");
const path = require("path");


const UglifyJSPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
  entry: [
    "babel-polyfill",
    "./src/app.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  resolve: {
    alias: {
      "@layouts": path.resolve(__dirname, "..", "src", "layouts"),
      "@components": path.resolve(__dirname, "..", "src", "components"),
      "@containers": path.resolve(__dirname, "..", "src", "containers"),
      "@services": path.resolve(__dirname, "..", "src", "services"),
      "@redux": path.resolve(__dirname, "..", "src", "redux"),
      "@hoc": path.resolve(__dirname, "..", "src", "hoc"),
      "@models": path.resolve(__dirname, "..", "src", "models"),
      "@config": path.resolve(__dirname, "..", "src", "config")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
}
