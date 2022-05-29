/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-29 23:54:28
 * @LastEditors: your name
 * @Description: 
 */

import tpl from './info.tpl';

const info = {
  name: 'LLLLuoxi',
  age: 11,
  address: 'china',
  email: 'luoxioooo@126.com'
}

const oApp = document.querySelector('#app');
oApp.innerHTML = tpl(info);

console.log('app.js');