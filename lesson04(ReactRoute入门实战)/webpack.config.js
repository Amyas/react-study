const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    // webpack 2以上的preloader写法  preloader被移除
    rules: [
      {
        test: /\.jsx$|\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [HTMLWebpackPluginConfig],
};
