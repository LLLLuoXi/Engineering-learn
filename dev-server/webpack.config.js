/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-25 23:14:57
 * @LastEditors: your name
 * @Description: luoxi
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'script/[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:8000
        writen by LLLLuoxi
        
        
        `],
      },
      clearConsole: true,
    }),
  ],
  devServer: {
    port: 8000,
    // 自动打开浏览器访问
    open: true,
    // 页面上显示编译的错误
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      // logging: 'info',
    },
    // 当访问 http://localhost:8000/ 的时候自动补全 测试 http://localhost:8000/index.html 有没有返回
    // index: 'index.html',
    proxy: {
      // 代理规则
      '/api': {
        target: 'https://dog.ceo',
        // 更改请求头中的host和origin
        changeOrigin: true,
      },
    },
  },
  stats: {
    builtAt: false,
    modules: false,
  }
};
