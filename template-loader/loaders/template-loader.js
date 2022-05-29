/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-30 00:26:14
 * @LastEditors: your name
 * @Description: 
 */

const { tplReplace } = require('../utils')

function templateLoader(sourceCode) {
  sourceCode = sourceCode.replace(/\s+/g, '')
  // console.log(sourceCode);
  return `
  export default (options)=>{
    ${tplReplace.toString()}
    return tplReplace('${sourceCode}',options)
  }
  `
}
module.exports = templateLoader;