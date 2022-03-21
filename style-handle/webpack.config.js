/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-21 21:22:37
 * @LastEditors: your name
 * @Description: 
 */
module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.css$/,
      use: ["./loaders/style-loader"]
    }]
  }
}
