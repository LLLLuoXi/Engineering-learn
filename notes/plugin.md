<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-23 21:52:04
 * @LastEditors: your name
 * @Description: webpack plugin
-->
# pulgin

- 当webpack生成文件时，顺便多生成一个说明描述文件。
- 当webpack编译启动时，控制台输出一句话表示webpack启动了。
- 当xxxx时，xxxx。

这种类似的功能需要把功能嵌入到webpack的编译流程中，而这种事情的实现是依托于plugin的。

## 基本使用

plugin的本质是一个带有``apply``方法的对象。

```js
var plugin = {
    apply: function(compiler){

    }
}

```
也可以将对象写成构造函数形式。
```js
class MyPlugin{
    apply(compiler){

    }
}

var plugin = new MyPlugin();
```

要将插件应用到webpack，需要把插件对象配置到webpack的plugins数组中，如下：

```jsx
module.exports = {
    plugins:[
        new MyPlugin()
    ]
}

```

## 原理

apply函数会在初始化阶段，创建好Compiler对象后运行。

compiler对象是在初始化阶段构建的，整个webpack打包期间只有一个compiler对象，后续完成打包工作的是compiler对象内部创建的compilation

apply方法会在**创建好compiler对象后调用**，并向方法传入一个compiler对象。
![plugin原理.png](https://s2.loli.net/2022/03/23/S3GQgwNYzZMcmXt.png)

compiler对象提供了大量的钩子函数（hooks，可以理解为事件），可以注册这些钩子函数，参与webpack编译和生成。

在apply方法中使用下面的代码注册钩子函数:

```jsx
class MyPlugin{
    apply(compiler){
        compiler.hooks.事件名称.事件类型(name, function(compilation){
            //事件处理函数
        })
    }
}

```

**事件名称**

即要监听的事件名，即钩子名，所有的钩子：[https://www.webpackjs.com/api/compiler-hooks](https://www.webpackjs.com/api/compiler-hooks)

**事件类型**

它提供了一些事件类型：

- tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束
- tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束
- tapPromise：注册一个基于Promise的异步的钩子函数，函数通过返回的Promise进入已决状态表示事件处理结束

**处理函数**

处理函数有一个事件参数`compilation`