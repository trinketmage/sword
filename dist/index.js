(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sword"] = factory();
	else
		root["sword"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Gesture/VirtualScroll.js":
/*!**************************************!*\
  !*** ./src/Gesture/VirtualScroll.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Scroll; });\n/* harmony import */ var _Math_Lerp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Math/Lerp */ \"./src/Math/Lerp.js\");\n\nclass Scroll {\n    constructor() {\n        this.settings = {\n            wrapperSpeed: 0.16,\n            targetSpeed: 0.02,\n            targetPercentage: 0.1\n        }\n        this.wapperOffset = 0;\n        this.windowHeight = 0;\n        this.scrollTop = 0;\n    }\n    init({\n        container\n    }) {\n        this.wrapper = container\n        this.wrapper.style.position = 'fixed'\n        this.wrapper.style.width = '100%'\n        this.wrapper.style.height = 'auto'\n        this.resize();\n        this.animate();\n    }\n    render() {\n        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n        this.wrapperUpdate()\n    }\n    animate() {\n        this.render();\n        this.scrollId = requestAnimationFrame(this.animate.bind(this));\n    }\n    wrapperUpdate() {\n        const oldY = this.wapperOffset\n        this.wapperOffset = Object(_Math_Lerp__WEBPACK_IMPORTED_MODULE_0__[/* lerp */ \"a\"])(this.wapperOffset, this.scrollTop, this.settings.wrapperSpeed);\n        const direction = oldY >= this.wapperOffset\n        this.wrapper.style.transform = 'translate3d(' + 0 + ',' + Math.round(-this.wapperOffset * 100) / 100 + 'px ,' + 0 + ')';\n    }\n    lockScreen() {\n        this.windowHeight = window.innerHeight;\n        document.body.style.height = this.windowHeight + 'px';\n    }\n    update(resetScroll = true) {\n        document.body.style.height = this.wrapper.clientHeight + 'px';\n        if (resetScroll) {\n            window.scroll(0, 0)\n            this.scrollTop = 0\n            this.wapperOffset = 0\n        }\n    }\n    resize() {\n        this.update()\n        this.windowHeight = window.innerHeight;\n    }\n}\n\n\n//# sourceURL=webpack://sword/./src/Gesture/VirtualScroll.js?");

/***/ }),

/***/ "./src/Math/Lerp.js":
/*!**************************!*\
  !*** ./src/Math/Lerp.js ***!
  \**************************/
/*! exports provided: lerp */
/*! exports used: lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return lerp; });\n// Precise method. Source: https://en.wikipedia.org/wiki/Linear_interpolation\nfunction lerp(v0, v1, t) {\n\treturn (1 - t) * v0 + t * v1\n}\n\n//# sourceURL=webpack://sword/./src/Math/Lerp.js?");

/***/ }),

/***/ "./src/Math/Trigonometry.js":
/*!**********************************!*\
  !*** ./src/Math/Trigonometry.js ***!
  \**********************************/
/*! exports provided: vectorToAngle, angleToVector */
/*! exports used: angleToVector, vectorToAngle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return vectorToAngle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return angleToVector; });\nfunction vectorToAngle(p2, p1 = {\n\tx: 0,\n\ty: 0\n}) {\n\tconst x = p2.x - p1.x;\n\tconst y = p2.y - p1.y;\n\tvar rad = Math.atan2(y, x);\n\treturn rad * (180 / Math.PI);\n}\n\nfunction angleToVector(angle = 0) {\n\tconst theta = (angle * Math.PI) / 180;\n\tconst x = Math.round(Math.cos(theta));\n\tconst y = Math.round(Math.sin(theta));\n\treturn {\n\t\tx,\n\t\ty\n\t};\n}\n\n//# sourceURL=webpack://sword/./src/Math/Trigonometry.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: lerp, vectorToAngle, angleToVector, VirtualScroll */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Math_Lerp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math/Lerp */ \"./src/Math/Lerp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return _Math_Lerp__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n/* harmony import */ var _Math_Trigonometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Math/Trigonometry */ \"./src/Math/Trigonometry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"vectorToAngle\", function() { return _Math_Trigonometry__WEBPACK_IMPORTED_MODULE_1__[\"b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"angleToVector\", function() { return _Math_Trigonometry__WEBPACK_IMPORTED_MODULE_1__[\"a\"]; });\n\n/* harmony import */ var _Gesture_VirtualScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gesture/VirtualScroll */ \"./src/Gesture/VirtualScroll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VirtualScroll\", function() { return _Gesture_VirtualScroll__WEBPACK_IMPORTED_MODULE_2__[\"a\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://sword/./src/index.js?");

/***/ })

/******/ });
});