const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const src = path.join(__dirname, '/src');
const dist = path.join(__dirname, '/public');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: src,
  entry: [
    path.join(src, 'index.js'),
    'webpack/hot/dev-server',
  ],

  devServer: { hot: true },

  output: {
    filename: 'js/app.js',
    path: dist,
  },

  debug: !isProd,
  devtool: isProd ? null : 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(src, 'index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/app.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};
