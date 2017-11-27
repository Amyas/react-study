const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8008
  },
  plugins: [HTMLWebpackPluginConfig]
};
