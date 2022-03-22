/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-22 23:04:27
 * @LastEditors: your name
 * @Description: 
 */
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['./loaders/style-loader.js'],
      },
      {
        test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
        use: [
          {
            loader: './loaders/img-loader.js',
            options: {
              // 3000字节以上使用图片。3000字节以内用base64
              limit: 3000,
              filename: 'img-[hash:5].[ext]',
            },
          },
        ],
      },
    ],
  },
};

