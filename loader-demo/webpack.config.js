/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-19 21:53:56
 * @LastEditors: your name
 * @Description: 
 */
module.exports = {
  mode: "development",
  module: {
    // 模块的匹配规则
    rules: [
      {
        // 正则表达式，匹配模块的路径
        test: /index\.js$/,
        // 匹配到了之后使用哪些加载器(loaders)
        use: [
          // 每个加载器的使用是一个对象
          {
            // 加载器的路径
            loader: "./loaders/test-loader?changeVar=变量",
            // loader: "./loaders/test-loader",
            // options: {
            //   changeVar: "变量"
            // }
          }
        ]
      },

      // loader 运行顺序： 432143
      {
        test: /index\.js$/,
        use: ["./loaders/loader1", "./loaders/loader2"]
      },
      {
        test: /\.js$/,
        use: ["./loaders/loader3", "./loaders/loader4"]
      }
    ],
  }
}