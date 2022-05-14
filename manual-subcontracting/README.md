
## 分包

分包：将一个整体的代码，分布到不同的打包文件中。

像常见的公共代码，库，比如 `jquery`,`lodash`,我们可以通过手动分包把他们打包后的文件单独的打包到单独的文件中，这样就可以通过浏览器缓存来增加传输效率，因为他不怎么变得，可以缓存下来，下一次浏览器不会从服务器进行传输

### 手动分包

#### 基本原理

#### 过程

1. 开启`output.library`。
2. 用`DllPlugin`创建资源清单。
   `webpack.dll.config.js`

```js
module.exports = {
  mode: 'production',
  entry: {
    jquery: ['jquery'],
    lodash: ['lodash'],
  },
  output: {
    filename: 'dll/[name].js',
    // 每个bundle暴露的全局变量名
    library: '[name]',
    path: path.resolve(__dirname, './dist'), // 打包后文件输出的位置
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll', '[name].manifest.json'),
      name: '[name]',
    }),
  ],
};
```

3. 用`DllReferencePlugin`使用资源清单
   `webpack.config.js`

```js
plugins: [
    // ......
    new webpack.DllReferencePlugin({
      manifest: require('./dll/jquery.manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dll/lodash.manifest.json'),
    }),
  ],
};
```

💡 如果用到`clean-webpack-plugin`的话，需要配置`cleanOnceBeforeBuildPatterns`来清除 dll 目录本身和它里面的文件。

```js
 new CleanWebpackPlugin({
  // 要清楚的文件或目录
  // 排除掉dll目录本身和它里面的文件
  cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/*'],
}),
```

这里用到的是语法是[Globbing patterns](https://github.com/sindresorhus/globby#Globbing%20patterns)

4. 手动引用公共 js
   `dist/index.html`

```html
<script src="./dll/jquery.js"></script>
<script src="./dll/lodash.js"></script>
```

可以看到打包后的代码大幅度减少，减少到了 250 行左右
`dist/main.js`

```js
/***/ "dll-reference lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = lodash;

/***/ })

```

`lodash`包打包后导出的 `lodash`全局变量则是我们手动导出的`lodash`,当依赖分析到我们的文件依赖`lodash`的时候，会走资源清单`lodash.manifest.json`里的找到了`lodash`的映射，看模块 id（`"./node_modules/lodash/lodash.js"`）是否一致，有没有找到，找到的话这些代码是不需要进入我们的最终代码 `main.js` 里的，于是被忽略掉。而是直接导出一个全局变量`lodash`,所有最后需要我们手动在页面全局引入这个全局变量。

```html
//...
<script src="./dll/lodash.js"></script>
```

而这个 `dll` 生成的 lodash.js 中就有和这个全局变量。
`dist/dll/lodash.js`

```js
var lodash(()=>{// .....});
```

jquery 同理。
