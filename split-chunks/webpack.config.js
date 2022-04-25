/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-25 22:40:25
 * @LastEditors: your name
 * @Description: 自动分包
 */


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
  },
  output: {
    filename: '[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    // 分包
    splitChunks: {
      chunks: 'all',
      // 慎用
      // maxSize: 60000,
      // automaticNameDelimiter: '.',
      // // 最小的chunk引用数
      // minChunks: 1,
      // // 分包达到多少字节才允许分包，默认30000
      // minSize: 30000,
      // 缓存组提取公共样式代码
      cacheGroups: {
        styles: {
          minSize: 0,
          minChunks: 2,
          test: /\.css$/,
        },
      },
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:5].css',
      // 控制公共分包名称
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // 配合多页应用
      chunks: ['page1'],
    }),
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
};
