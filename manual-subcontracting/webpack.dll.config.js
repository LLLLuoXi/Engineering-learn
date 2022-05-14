/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-14 23:38:48
 * @LastEditors: your name
 * @Description: 
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    jquery: ['jquery'],
    lodash: ['lodash'],
  },
  output: {
    filename: 'dll/[name].js',
    // 每个bundle暴露的全局变量名
    library: '[name]',
    path: path.resolve(__dirname, './dist'), // 打包后文件输出的位置
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll', '[name].manifest.json'),
      name: '[name]',
    }),
  ],
};
