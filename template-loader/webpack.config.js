/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-30 00:27:19
 * @LastEditors: your name
 * @Description: template loader
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.[hash:5].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          'babel-loader',
          {
            loader: './loaders/template-loader',
            // options: {
            //   log: true
            // }
          },


        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')

  })],
  devServer: {
    port: 3031,
    open: true,
  }
}