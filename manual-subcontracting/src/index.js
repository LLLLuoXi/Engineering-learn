/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-14 23:37:30
 * @LastEditors: your name
 * @Description: 
 */

import $ from 'jquery';
import _ from 'lodash';
import './css/index.css';
console.log('$', $);

const obj = {
  0: 'a',
  1: 'b',
};
const result = _.isArray(obj);
console.log(result);

// 接受热更新
if (module.hot) {
  module.hot.accept();
}
console.log('开启了热更新12');
