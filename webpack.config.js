'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
  name: 'frontend',
  entry: path.join(__dirname, 'main.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'cached_uglify/'),
      debug: false,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  }
};
