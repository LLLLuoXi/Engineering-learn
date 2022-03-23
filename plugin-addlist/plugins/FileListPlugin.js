/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-23 21:54:28
 * @LastEditors: your name
 * @Description: 在生成资源到 output 目录之前生成一个描述打包结果的文件，文件名，后缀可填写
 */
module.exports = class FileListPlugin {
  constructor(filename = 'filelist.txt') {
    this.filename = filename;
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (complation) => {
      console.log(complation.assets);
      let fileList = ['write by LLLLuoxi.....'];
      for (const key in complation.assets) {
        const content = `【${key}】
大小:${complation.assets[key].size() / 1000}kb`;
        fileList.push(content);
      }
      const str = fileList.join('\n\n');
      complation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
