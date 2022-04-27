/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-27 23:34:43
 * @LastEditors: luoxi
 * @Description: webpack.config.js
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除 dist 目录
const CopyPlugin = require("copy-webpack-plugin"); // 处理静态资源
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 处理模板页面
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css文件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/[name].[chunkhash:5].js",
    publicPath: "/", // 公用的公共路径 /
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名 @ = src目录
      _: __dirname, // 别名 _ = 工程根目录
    },
  },
  stats: {
    colors: true, // 打包时使用不同的颜色区分信息
    modules: false, // 打包时不显示具体模块信息
    entrypoints: false, // 打包时不显示入口模块信息
    children: false, // 打包时不显示子模块信息
  },
  module: {
    rules: [
      {
        // 各种图片、字体文件，均交给 url-loader 处理
        test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "static/[name].[hash:5].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      { test: /\.js$/, use: "babel-loader" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      // 应用 复制文件 插件
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: "./",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      // 打包 css 代码 到文件中
      filename: "css/[name].css",
      chunkFilename: "css/common.[hash:5].css", // 针对公共样式的文件名
    }),
    // VueLoader16版本之后需要这个plugin
    new VueLoaderPlugin(),
  ],
};
