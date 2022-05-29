/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-29 23:43:42
 * @LastEditors: your name
 * @Description: 
 */

function tplReplace(template, replaceObj) {
  return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    return replaceObj[key];
  })
}

module.exports = {
  tplReplace
}