/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "age": () => (/* binding */ age),
/* harmony export */   "lastName": () => (/* binding */ lastName),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var name = 'Luiz';
var lastName = 'Miranda';
var age = 30;
function sum(x, y) {
  return x + y;
}

// exportando de forma individual
 // ou name as name2

// é possivel exportar ao criar
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(id, name) {
  _classCallCheck(this, Pessoa);
  this.id = id;
  this.name = name;
});

/***/ }),

/***/ "./src/module2.js":
/*!************************!*\
  !*** ./src/module2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Veiculo": () => (/* binding */ Veiculo),
/* harmony export */   "coisas": () => (/* binding */ coisas),
/* harmony export */   "coisas2": () => (/* binding */ coisas2)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Veiculo = /*#__PURE__*/_createClass(function Veiculo(name, value) {
  _classCallCheck(this, Veiculo);
  this.name = name;
  this.value = value;
});
var coisas = ['maçã', 'teclado', 'mouse'];
var coisas2 = ['bola', 'pc', 'copo'];

/***/ }),

/***/ "./src/module3.js":
/*!************************!*\
  !*** ./src/module3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objeto),
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
// Pode ter uma variável como default por módulo
// OBS

function sum(x, y) {
  return x + y;
}
var objeto = 'mesa';

// OBS: const não pode ser default no momento em que é criada:
// export const objeto = 'mesa'     // ERRO

// Para resolver isso:


/***/ }),

/***/ "./src/module4.js":
/*!************************!*\
  !*** ./src/module4.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "y": () => (/* binding */ y)
/* harmony export */ });
// exportando arrow function como padrão
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (x, y) {
  return x * y;
});
var x = 10;
var y = 10;

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ "./src/module1.js");
/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ "./src/module2.js");
/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3 */ "./src/module3.js");
/* harmony import */ var _module4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module4 */ "./src/module4.js");
// ----------------------------------------------------------
// MODULO 1

// para alterar o nome da variavel, usar 'as', caso der erro de variaveis com mesmo nome, OBS: Também é possivel fazer isso ao exportar

var name = 'João';
console.log(name, _module1__WEBPACK_IMPORTED_MODULE_0__.lastName, _module1__WEBPACK_IMPORTED_MODULE_0__.age, (0,_module1__WEBPACK_IMPORTED_MODULE_0__.sum)(10, 5));
var p1 = new _module1__WEBPACK_IMPORTED_MODULE_0__.Pessoa(1, 'Vinicius');
console.log(p1);

// ----------------------------------------------------------
console.log('');

// MODULO 2

// gera um objeto com tudo que foi exportado do modulo 2

console.log(_module2__WEBPACK_IMPORTED_MODULE_1__);

// ----------------------------------------------------------
console.log('');

// MODULO 3

// Importando apenas o que está default
// a vantagem do default é que pode atribuir qualquer nome para ele sem precisar informar que o nome foi alterado

console.log(_module3__WEBPACK_IMPORTED_MODULE_2__["default"]);

// ----------------------------------------------------------
console.log('');

// MODULO 4

// para importar o default juntamente com o restante:
// o default não fica dentro de chaves

console.log((0,_module4__WEBPACK_IMPORTED_MODULE_3__["default"])(_module4__WEBPACK_IMPORTED_MODULE_3__.x, _module4__WEBPACK_IMPORTED_MODULE_3__.y));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map