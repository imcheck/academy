const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "babel-polyfill",
    "./src/app.js",
    "webpack-hot-middleware/client"
  ],
  output: {
    publicPath: "/",
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
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    // new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.DEBUG": JSON.stringify("*")
    })
  ]
}
