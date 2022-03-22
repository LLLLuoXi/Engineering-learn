/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/healthy.png":
/*!********************************!*\
  !*** ./src/assets/healthy.png ***!
  \********************************/
/***/ ((module) => {

module.exports= `img-f683e.png`

/***/ }),

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((module) => {

var style = document.createElement('style');
  style.innerHTML = `body {
  background-color: #333;
  color: #fff;
}
`
  document.head.appendChild(style)
  module.exports=`body {
  background-color: #333;
  color: #fff;
}
` 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-22 23:04:45
 * @LastEditors: your name
 * @Description: 
 */

const content = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css")

console.log('css源代码', content);

// 生成图片
const src = __webpack_require__(/*! ./assets/healthy.png */ "./src/assets/healthy.png");
const img = document.createElement('img');
console.log('src', src);

img.src = src;
document.body.appendChild(img);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map