/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-14 23:47:38
 * @LastEditors: your name
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    hot: true, // 开启HMR
  },
  entry: {
    main: './src/index.js',
    other: './src/other.js',
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  module: {
    // noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        exclude: /lodash/,
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new CleanWebpackPlugin({
      // 要清楚的文件或目录
      // 排除掉dll目录本身和它里面的文件
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/*'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dll/jquery.manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dll/lodash.manifest.json'),
    }),
  ],
};
