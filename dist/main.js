/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderAboutPage() {\r\n  // HTML code for the about page of a restaurant\r\n  const aboutPageHtml = `\r\n        <div class=\"about-page\">\r\n            <h1>About Us</h1>\r\n            <p>Welcome to Delicious Eats! We pride ourselves on offering a diverse menu of mouthwatering dishes made with fresh, locally-sourced ingredients.</p>\r\n        </div>\r\n    `;\r\n\r\n  // Render the about page HTML\r\n  // ...\r\n  return aboutPageHtml;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = () => {\r\n    return `<img src=\"\" alt=\"\" />\r\n    <h2>Reach Restaurant</h2>\r\n    <p>\r\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,\r\n      incidunt. Rem labore odit, perspiciatis officiis quas est quo provident\r\n      culpa cupiditate inventore vitae odio sequi quis, excepturi ducimus!\r\n      Suscipit, dolor.\r\n    </p>`\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n// CSS\r\n\r\nlet content = document.getElementById(\"content\")\r\n\r\nconst home = document.getElementById(\"home\")\r\nconst menu = document.getElementById(\"menu\")\r\nconst about = document.getElementById(\"about\")\r\n\r\ncontent.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\nhome.onclick = () => {\r\n    content.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\r\nabout.onclick = () => {\r\n    content.innerHTML = (0,_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n}\r\nmenu.onclick = () => {\r\n    content.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst restaurantMenu = [\r\n    {\r\n        name: \"Margherita Pizza\",\r\n        type: \"Pizza\",\r\n        description: \"Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.\",\r\n        price: 10.99\r\n    },\r\n    {\r\n        name: \"Chicken Alfredo\",\r\n        type: \"Pasta\",\r\n        description: \"Creamy fettuccine pasta tossed with grilled chicken, Parmesan cheese, and Alfredo sauce.\",\r\n        price: 12.99\r\n    },\r\n    {\r\n        name: \"Caesar Salad\",\r\n        type: \"Salad\",\r\n        description: \"Crisp romaine lettuce, croutons, and Parmesan cheese tossed in Caesar dressing.\",\r\n        price: 8.49\r\n    },\r\n    {\r\n        name: \"Grilled Salmon\",\r\n        type: \"Seafood\",\r\n        description: \"Fresh salmon fillet grilled to perfection and served with seasonal vegetables.\",\r\n        price: 15.99\r\n    },\r\n    {\r\n        name: \"Cheeseburger\",\r\n        type: \"Burgers\",\r\n        description: \"Juicy beef patty topped with cheddar cheese, lettuce, tomato, onion, and pickles, served with fries.\",\r\n        price: 11.49\r\n    },\r\n    {\r\n        name: \"Vegetable Stir-Fry\",\r\n        type: \"Vegetarian\",\r\n        description: \"Assorted vegetables stir-fried in a savory sauce, served over steamed rice.\",\r\n        price: 9.99\r\n    }\r\n];\r\n\r\n\r\nconst renderMenuPage = ()=>{\r\n    const menu = restaurantMenu.map((item)=>{\r\n        return `\r\n        <div class=\"menu-item\">\r\n            <h3>${item.name}</h3>\r\n            <p><strong>Type:</strong> ${item.type}</p>\r\n            <p><strong>Description:</strong> ${item.description}</p>\r\n            <p><strong>Price:</strong> $${item.price}</p>\r\n        </div>\r\n        `\r\n    }).join('')\r\n    return menu\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|     margin: 0;\\n|     padding: 0;\");\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;