<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-26 22:56:28
 * @LastEditors: your name
 * @Description: 
-->
- [ES Module](#es-module)
  - [⛏️ 基本使用](#️-基本使用)
    - [导出](#导出)
    - [导入](#导入)
  - [⚠️ 注意点](#️-注意点)
  - [🧑‍🤝‍🧑 动态依赖](#-动态依赖)
  - [⚛️ 符号绑定](#️-符号绑定)
# ES Module

## ⛏️ 基本使用
### 导出
- 具名导出（普通导出），可以导出多个
- 默认导出，只能导出一个

一个模块可以同时存在两种导出方式，最终会合并为一个「对象」导出
```js
export const a = 1; // 具名，常用
export function b() {} // 具名，常用
export const c = () => {}  // 具名，常用
const d = 2;
export { d } // 具名
const k = 10
export { k as temp } // 具名

// export default 3 // 默认，常用
// export default function() {} // 默认，常用
// const e = 4;
// export { e as default } // 默认

const f = 4, g = 5, h = 6
export { f, g, h as default} // 基本 + 默认

// 以上代码将导出下面的对象
/*
{
    a: 1,
    b: fn,
    c: fn,
    d: 2,
    temp: 10,
    f: 4,
    g: 5,
    default: 6
}
*/
```
### 导入
```js
// 仅运行一次该模块，不导入任何内容
import "模块路径"
// 常用，导入属性 a、b，放到变量a、b中。a->a, b->b
import { a, b } from "模块路径"
// 常用，导入属性 default，放入变量c中。default->c
import c from "模块路径"
// 常用，default->c，a->a, b->b
import c, { a, b } from "模块路径"
// 常用，将模块对象放入到变量obj中
import * as obj from "模块路径"


// 导入属性a、b，放到变量temp1、temp2 中
import {a as temp1, b as temp2} from "模块路径"
// 导入属性default，放入变量a中，default是关键字，不能作为变量名，必须定义别名
import {default as a} from "模块路径"
//导入属性default、b，放入变量a、b中
import {default as a, b} from "模块路径"
// 以上均为静态导入

import("模块路径") // 动态导入，返回一个Promise，完成时的数据为模块对象
```

## ⚠️ 注意点
- 导出代码必须为顶级代码，即不可放到代码块中
- 静态导入的代码必须为在代码顶端，也不可放入代码块中
- 静态导入的代码绑定的符号是常量，不可更改

## 🧑‍🤝‍🧑 动态依赖
在运行的时候才能确定依赖关系，和像CJS一样可以在代码执行时候导入，比如if判断或者函数中。
```js
// module.js
export default 'a'
export const count = 0
```
```js
// index.js
import("./module,js").then(m=>{
  console.log(m) // log: {"count": 0,"default": "a"}
})
```
静态依赖：在代码运行前就要确定依赖关系

- 要在顶部导入依赖，不能像CJS一样在代码执行时候导入，比如if判断或者函数中。

## ⚛️ 符号绑定
导入的时候`{count, changeCount}` 不是一个对象，也不是解构，`count` 和 `c`是同一个内存空间，有点类似引用地址传递。
```js
// module.js
export var count = 1;
export function changeCount(){
  count = 2;
}

// index.js
// 导入位置的符号和导出的符号并非赋值，它们完全是一个东西
import {count as c, changeCount} from './module.js';
console.log(c); // 1
changeCount();
console.log(c); // 2
```
如果像以下的情况,count 和 c不是同一个内存空间，是两块不一样的内存空间。
```js
// module.js
export var count = 1;
export function changeCount(){
  count = 2;
}

// index.js
// 导入位置的符号和导出的符号并非赋值，它们完全是一个东西
import {count, changeCount} from './module.js';
const c = count
console.log(c); // 1
changeCount();
console.log(c); // 1
```