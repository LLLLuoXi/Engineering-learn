/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-22 23:04:45
 * @LastEditors: your name
 * @Description: 
 */

const content = require("./assets/index.css")

console.log('css源代码', content);

// 生成图片
const src = require('./assets/healthy.png');
const img = document.createElement('img');
console.log('src', src);

img.src = src;
document.body.appendChild(img);
