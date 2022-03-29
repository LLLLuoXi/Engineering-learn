/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-29 21:59:03
 * @LastEditors: your name
 * @Description: 
 */
module.exports = {
  mode: 'development',
  devServer: {
    port: 8000,
    // 自动打开浏览器访问
    open: ['list.html'],
    // openPage: 'list.html',
    // 页面上显示编译的错误
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
      },
    },
  },
};
