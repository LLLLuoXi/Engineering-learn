/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-30 22:09:37
 * @LastEditors: your name
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        // use: [
        //   {
        //     loader: 'file-loader',
        //   },
        // ],
        // 使用asset module type来替代url,file-loader。
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html', })]
};
