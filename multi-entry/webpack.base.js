/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-29 19:35:03
 * @LastEditors: your name
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    list: './src/list/index.js',
    detail: './src/detail/index.js',
  },
  output: {
    filename: 'script/[name].[chunkhash:5].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  stats: {
    modules: false,
    colors: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/list.html',
      filename: 'list.html',
      chunks: ['list'],
    }),
    new HtmlWebpackPlugin({
      template: './public/detail.html',
      filename: 'detail.html',
      chunks: ['detail'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        //   // 复制规则 to 相对的是dist目录
        {
          from: './public',
          to: './',
          globOptions: {
            ignore: ['**.html'],
          }
        },
      ],
    }),
  ],
};
