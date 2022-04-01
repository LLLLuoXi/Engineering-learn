/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-01 22:54:07
 * @LastEditors: your name
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: 'img/[hash:5].[ext]'
        //   }
        // }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css'
    })
  ],
  devServer: {
    open: true,
  },
};
