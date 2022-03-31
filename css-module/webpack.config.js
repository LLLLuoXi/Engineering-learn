/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-31 22:08:21
 * @LastEditors: your name
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true
              modules: {
                localIdentName: '[local]-[hash:5]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    open: true,
  },
};
