const loaderUtils = require('loader-utils');
function loader(buffer) {
  // 读取用户配置option.limit 超过3000则用图片文件,3000字节以内用base64
  const { limit = 1000, filename = '[hash:5].[ext]' } =
    loaderUtils.getOptions(this);
  let content = null;
  if (buffer.byteLength >= limit) {
    content = getFilePath.call(this, buffer, filename);
  } else {
    content = getBase64(buffer);
  }
  return `module.exports= \`${content}\``;
}

// 要处理的是原始数据
loader.raw = true;

module.exports = loader;

function getBase64(buffer) {
  return 'data:image/png;base64,' + buffer.toString('base64');
}

function getFilePath(buffer, name) {
  //interpolateName获取文件的hash值，并插入值,生成唯一的文件名
  const filename = loaderUtils.interpolateName(this, name, {
    content: buffer,
  });

  //发射文件，会在dist目录下面生成一个文件
  this.emitFile(filename, buffer);
  return filename;
}
