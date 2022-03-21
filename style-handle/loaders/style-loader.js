/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-21 21:28:36
 * @LastEditors: your name
 * @Description: 
 */
module.exports = function (sourceCode) {
  var code = `var style = document.createElement('style');
  style.innerHTML = \`${sourceCode}\`
  document.head.appendChild(style)
  module.exports=\`${sourceCode}\` `
  return code
}
