<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-25 22:53:23
 * @LastEditors: your name
 * @Description: 
-->
- [CommonJS](#commonjs)
  - [🍇 基本使用](#-基本使用)
  - [🍈 原理](#-原理)
  - [🍉 注意点](#-注意点)
  
# CommonJS

## 🍇 基本使用

node规定：

1. node中的每个js文件都是一个CMJ模块，通过node命令运行的模块，叫做入口模块。
2. 模块中的所有全局定义的变量、函数，都不会污染到其他模块，一个文件是一个模块，拥有单独的作用域。写在模块里的代码会放在下面的函数内执行。
    
    ```js
    (function (exports,require,module,__filename,__dirname){
      // 代码
    })
    ```
    
3. 模块可以暴露（导出）一些内容给其他模块使用，需要暴露什么内容，就在模块中给`module.exports`赋值
4. 一个模块可以导入其他模块，使用函数`require("要导入的模块路径")`即可完成，该函数返回目标模块的导出结果
    1. 导入模块时，可以省略`.js`。
    2. 导入模块时，必须以`./`或`../`开头。
5. 一个模块在被导入时会运行一次，然后它的导出结果会被node缓存起来，后续对该模块导入时，不会重新运行，直接使用缓存结果。


## 🍈 原理
```js
// require函数的伪代码
function require(path){
  if(该模块有缓存吗){
    return 缓存结果;
  }
  function _run(exports, require, module, __filename, __dirname){
    // 模块代码会放到这里
  }
  
  var module = {
    exports: {}
  }
  
  _run.call(
    module.exports, 
    module.exports, 
    require, 
    module, 
    模块路径, 
    模块所在目录
  );
  
  // ..... 把 module.exports 加入到缓存;
  return module.exports;
}

```
如果在node环境输出`console.log(argument)` 会得到5 。这就说明了我们写的模块代码实在一个函数里执行，`exports`, `require`, `module`, `__filename`, `__dirname` 作为函数参数可以供我们使用。每个模块返回一个对象`module.exports` ,保证了变量的隔离，而且`this`,`module.exports`,`exports`默认情况下都是同一个对象。

```js
// module.js
exports.a = 1
module.exports.b = 2
```

```js
// index.js
const m = require('./module')
console.log(m); // log: { a: 1, b: 2 }
```

`module.js` 实际上得到的导出对象是 `module.exports = { a: 1, b: 2 }` 。

但是如果像下面的这种情况

```js
// module.js
exports.a = 1
module.exports = {
  b: 2
}
```

```js
// index.js
const m = require('./module')
console.log(m); // log: { b: 2 }
```

`module.exports`重新赋值了一个新的对象`{b:2}`，就不再指向原来那个对象。所以尽量避免像以上这种方式混用`exports` 和 `module.exports` 。

但是可以像这样,改变`module.exports` 的一个属性`b`

```js
// module.js
exports.a = 1
module.exports.b = {
  b: 2
}
```

```js
// index.js
const m = require('./module')
console.log(m); // log: { a: 1, b: { b: 2 } }
```

## 🍉 注意点
- 可以在代码块中使用`require`导入语句
- 动态依赖（需要代码运行后才能确定依赖）
- 动态依赖是同步执行的
