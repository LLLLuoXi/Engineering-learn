/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-19 21:45:44
 * @LastEditors: your name
 * @Description: 
 */
// 最新的loaderUtils 已经移除了getOption这个api 要降级到 ^1.0.4
const loaderUtils = require("loader-utils")
module.exports = function (sourceCode) {
  // sourceCode :变量 a = 1
  console.log('test-loader运行了...');
  // console.log('上下文',this);
  const options = loaderUtils.getOptions(this)
  console.log(options.changeVar);
  const reg = new RegExp(options.changeVar, 'g')
  return sourceCode.replace(reg, "var")
}
