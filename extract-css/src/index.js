/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-01 22:40:32
 * @LastEditors: your name
 * @Description: 
 */
import styles from "./assets/index.css"
console.log('styles', styles);

const div = document.createElement('div')
div.className = styles.main;
document.body.appendChild(div)