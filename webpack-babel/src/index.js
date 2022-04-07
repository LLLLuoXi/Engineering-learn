/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-07 22:44:59
 * @LastEditors: your name
 * @Description: 
 */
const func = () => {
  console.log('arrow function');
};

// 需要借助 core-js
new Promise((resolve, reject) => {
  resolve();
});

// 需要借助 regenerator-runtime
async function method() { }
