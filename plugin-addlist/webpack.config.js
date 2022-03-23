/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-23 21:31:39
 * @LastEditors: your name
 * @Description: 
 */
const FileListPlugin = require('./plugins/FileListPlugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [new FileListPlugin('文件列表说明.txt')],
};
