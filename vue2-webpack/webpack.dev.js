/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-27 23:10:55
 * @LastEditors: your name
 * @Description: 
 */
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

// webpack的开发环境配置，从基本配置中合并
const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      // 如果开发环境中有跨域问题，在这里配置代理
    },
    stats: "minimal",
  },
};
module.exports = merge(baseConfig, devConfig);
