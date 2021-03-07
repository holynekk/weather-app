/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Excluded_z8XrX_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Excluded-z8XrX.ttf */ \"./src/fonts/Excluded-z8XrX.ttf\");\n/* harmony import */ var _fonts_LTBulletin_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/LTBulletin-Medium.ttf */ \"./src/fonts/LTBulletin-Medium.ttf\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Excluded_z8XrX_ttf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_LTBulletin_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face{\\n    font-family: 'my-font';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-style: normal;\\n}\\n\\n@font-face{\\n    font-family: 'info-font';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    font-style: normal;\\n}\\n\\n:root{\\n    --light-gray: rgb(50, 50, 50);\\n    --dark-gray: rgb(20, 20, 20);\\n}\\nhtml{\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n}\\n\\nbody{\\n    background-color: var(--light-gray);\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n#just-header{\\n    background-color: var(--dark-gray);\\n    margin-top: 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    border-bottom: 1px solid white;\\n}\\n\\nh1{\\n    font-family: 'my-font';\\n    color: lightseagreen;\\n    font-size: 3.5rem;\\n}\\n\\nform{\\n    width: 50%;\\n    text-align: center;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\ninput{\\n    width: 360px;\\n    margin: 0 auto 20px auto;\\n}\\n\\n#input-field{\\n    border: 0;\\n    border-bottom: 2px solid gray;\\n    outline: 0;\\n    color: white;\\n    background: transparent;\\n    transition: border-color 0.2s;\\n    font-size: 1.3rem;\\n    z-index: 9;\\n}\\n\\n\\n#input-field:focus{\\n    border-bottom: 2px solid white;\\n}\\n\\n#submit{\\n    background-color: lightslategray;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    color: white;\\n    margin-top: 0;\\n    margin-bottom: 20px;\\n    width: 70px;\\n    height: 25px;\\n    transition: all 0.2s ease-in-out;\\n}\\n\\n#submit:hover{\\n    background-color:lightseagreen;\\n    transform: scale(1.1);\\n}\\n\\n#submit:active{\\n    background-color:black;\\n}\\n\\n#container{\\n    width: 800px;\\n    height: 600px;\\n    text-align: center;\\n    margin: 30px auto auto auto;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#card-top{\\n    height: 15%;\\n    width: 100%;\\n    margin: 0;\\n    background-color: black;\\n    border-radius: 30px 30px 0 0;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n#card-bottom{\\n    height: 85%;\\n    width: 100%;\\n    margin: 0;\\n    background-color: white;\\n    border: 1px solid black;\\n    border-radius: 0 0 30px 30px;\\n}\\n\\n#city-name{\\n    color: lightseagreen;\\n    font-family: monospace;\\n    font-size: 2.7rem;\\n    font-weight: 900;\\n    margin-left: 20px;\\n    margin-top: 20px;\\n}\\n\\n#current-time{\\n    color: lightseagreen;\\n    font-family: monospace;\\n    font-size: 2.2rem;\\n    font-weight: 500;\\n    margin-right: 20px;\\n    margin-top: 20px;\\n}\\n\\n#weather-image{\\n    height: 192px;\\n    width: 192px;\\n    margin-top: 20px;\\n}\\n\\n#temp-text{\\n    font-size: 3rem;\\n    position: relative;\\n    bottom: 50px;\\n}\\n\\n#extra-data{\\n    height: 180px;\\n    width: 699px;\\n    background-color: rgba(0, 0, 0, 0.2);\\n    border-radius: 0 0 15px 15px;\\n    margin: auto;\\n    position: relative;\\n    bottom: 80px;\\n    display: flex;\\n    flex-wrap: wrap;\\n}\\n\\n#extras{\\n    height: 90px;\\n    width: 233px;\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n}\\n\\n#extra-image{\\n    height: 48px;\\n    width: 48px;\\n}\\n\\n#itstext{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#mid-text{\\n    position: relative;\\n    top: 20px;\\n    font-family: sans-serif;\\n    font-weight: 800;\\n    font-size: 1.5rem;\\n}\\n\\n#inf-top{\\n    font-weight: bolder;\\n    font-family: 'info-font';\\n    font-size: 1.3rem;\\n}\\n\\n#inf-bottom{\\n    font-weight: lighter;\\n    font-family: monospace;\\n    font-size: 1.1rem;\\n    position: relative;\\n    bottom: 15px;\\n}\\n\\n@media (max-width: 800px){\\n    h1{\\n        font-size: 2rem;\\n    }\\n    #input-field{\\n        width: 200px;\\n        font-size: 1.1rem;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/fonts/Excluded-z8XrX.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Excluded-z8XrX.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cb36383f5f2afe414ef.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/Excluded-z8XrX.ttf?");

/***/ }),

/***/ "./src/fonts/LTBulletin-Medium.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/LTBulletin-Medium.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"364fc214af079aefe4c4.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/LTBulletin-Medium.ttf?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/initial-page-load.js */ \"./src/scripts/initial-page-load.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_scripts_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.setup)();\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/scripts/add-form.js":
/*!*********************************!*\
  !*** ./src/scripts/add-form.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendForm\": () => (/* binding */ appendForm)\n/* harmony export */ });\n\n\nfunction appendForm(){\n    const header = document.querySelector('header');\n\n    const form = document.createElement('form');\n    \n    const text = document.createElement('input');\n    text.setAttribute('id', 'input-field');\n    text.setAttribute('type', 'text');\n    text.setAttribute('name', 'city');\n    text.setAttribute('for', 'city');\n    text.setAttribute('placeholder', 'Name of the city');\n    text.setAttribute('pattern', '[a-zA-z]*');\n\n    const label = document.createElement('label');\n    label.setAttribute('id', 'input-label'); \n    label.textContent = \"Enter name of the city\";\n\n    form.appendChild(text);\n    \n    const button = document.createElement('button');\n    button.textContent = \"Search\";\n    button.setAttribute('id', 'submit');\n\n    form.appendChild(button);\n\n    header.appendChild(form);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/add-form.js?");

/***/ }),

/***/ "./src/scripts/create-container.js":
/*!*****************************************!*\
  !*** ./src/scripts/create-container.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFirstContainer\": () => (/* binding */ createFirstContainer),\n/* harmony export */   \"createWeatherCard\": () => (/* binding */ createWeatherCard)\n/* harmony export */ });\n\n\nconst body = document.querySelector('body');\n\nfunction getTime(zone){\n    const today = new Date();\n    const localTime = today.getTime();\n    const localOffset = today.getTimezoneOffset() * 60000;\n    const utc = localTime + localOffset;\n    let answer = utc + (1000 * zone);\n    const nd = new Date(answer);\n\n    return nd.getHours()+':'+nd.getMinutes()+\":\"+nd.getSeconds();\n}\n\nfunction createFirstContainer(){\n    const container = document.createElement('div');\n    container.setAttribute('id', 'container');\n    container.textContent = \"Search for a city!\";\n    body.appendChild(container);\n}\n\nfunction createWeatherCard(data){\n    const container = document.getElementById('container');\n    container.textContent = \"\";\n\n    const top = document.createElement('div');\n    top.setAttribute('id', 'card-top');\n    const bottom = document.createElement('div');\n    bottom.setAttribute('id', 'card-bottom');\n\n    const cityName = document.createElement('p');\n    cityName.setAttribute('id', 'city-name');\n    cityName.textContent = data.name + ',' + data.sys.country;\n    top.appendChild(cityName);\n\n    const currentTime = document.createElement('p');\n    currentTime.setAttribute('id', 'current-time');\n    console.log(data.timezone);\n    currentTime.textContent = getTime(data.timezone);\n    top.appendChild(currentTime);\n\n    const myIcon = new Image();\n    myIcon.setAttribute('id', 'weather-image');\n    const iconCode = data.weather[0].icon;\n    myIcon.src = \"./../src/icons/\"+iconCode+'.png';\n    bottom.appendChild(myIcon);\n\n    console.log(data);\n\n    const temp = document.createElement('p');\n    temp.setAttribute('id', 'temp-text');\n    temp.textContent = (parseInt(data.main.temp) - 273).toString()+\"C°\";\n    bottom.appendChild(temp);\n\n    const extraData = document.createElement('div');\n    extraData.setAttribute('id', 'extra-data');\n    \n\n    const feels = document.createElement('div');\n    feels.setAttribute('id', 'extras');\n    const feelsIcon = new Image();\n    feelsIcon.setAttribute('id', 'extra-image');\n    feelsIcon.src = \"./../src/icons/feels.png\";\n\n    let itsText = document.createElement('div');\n    itsText.setAttribute('div', 'itstext');\n    let a = document.createElement('p');\n    a.setAttribute('id', 'inf-top');\n    a.textContent = \"Feels Like\"\n    let b = document.createElement('p');\n    b.setAttribute('id', 'inf-bottom');\n    b.textContent = (parseInt(data.main.feels_like)-273).toString()+\" C°\";\n\n    itsText.appendChild(a);\n    itsText.appendChild(b);\n    feels.appendChild(feelsIcon);\n    feels.appendChild(itsText);\n    extraData.appendChild(feels);\n\n\n\n    let txt = document.createElement('div');\n    txt.setAttribute('id', 'extras');\n    const justWeather = document.createElement('p');\n    justWeather.textContent = data.weather[\"0\"].main;\n    justWeather.setAttribute('id', 'mid-text');\n    txt.appendChild(justWeather);\n    extraData.appendChild(txt);\n\n\n\n    const humidity = document.createElement('div');\n    humidity.setAttribute('id', 'extras');\n    const humidityIcon = new Image();\n    humidityIcon.setAttribute('id', 'extra-image');\n    humidityIcon.src = \"./../src/icons/humidity.png\";\n\n    itsText = document.createElement('div');\n    itsText.setAttribute('div', 'itstext');\n    a = document.createElement('p');\n    a.setAttribute('id', 'inf-top');\n    a.textContent = \"Humidity\"\n    b = document.createElement('p');\n    b.setAttribute('id', 'inf-bottom');\n    b.textContent = data.main.humidity + \" %\";\n\n    itsText.appendChild(a);\n    itsText.appendChild(b);\n    humidity.appendChild(humidityIcon);\n    humidity.appendChild(itsText);\n    extraData.appendChild(humidity);\n\n\n    const wind = document.createElement('div');\n    wind.setAttribute('id', 'extras');\n    const windIcon = new Image();\n    windIcon.setAttribute('id', 'extra-image');\n    windIcon.src = \"./../src/icons/wind.png\";\n\n    itsText = document.createElement('div');\n    itsText.setAttribute('div', 'itstext');\n    a = document.createElement('p');\n    a.setAttribute('id', 'inf-top');\n    a.textContent = \"Wind Speed\"\n    b = document.createElement('p');\n    b.setAttribute('id', 'inf-bottom');\n    b.textContent = data.wind.speed + \" km/h\";\n\n    itsText.appendChild(a);\n    itsText.appendChild(b);\n    wind.appendChild(windIcon);\n    wind.appendChild(itsText);\n    extraData.appendChild(wind);\n\n\n    txt = document.createElement('div');\n    txt.setAttribute('id', 'extras');\n    txt.textContent = '';\n    extraData.appendChild(txt);\n\n\n    const pressure = document.createElement('div');\n    pressure.setAttribute('id', 'extras');\n    const pressureIcon = new Image();\n    pressureIcon.setAttribute('id', 'extra-image');\n    pressureIcon.src = \"./../src/icons/pressure.png\";\n\n    itsText = document.createElement('div');\n    itsText.setAttribute('div', 'itstext');\n    a = document.createElement('p');\n    a.setAttribute('id', 'inf-top');\n    a.textContent = \"Pressure\";\n    b = document.createElement('p');\n    b.setAttribute('id', 'inf-bottom');\n    b.textContent = data.main.pressure + \" mbar\";\n\n    itsText.appendChild(a);\n    itsText.appendChild(b);\n    pressure.appendChild(pressureIcon);\n    pressure.appendChild(itsText);\n    extraData.appendChild(pressure);\n\n\n\n\n    bottom.appendChild(extraData);\n    container.appendChild(top);\n    container.appendChild(bottom);\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/create-container.js?");

/***/ }),

/***/ "./src/scripts/create-header.js":
/*!**************************************!*\
  !*** ./src/scripts/create-header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _add_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-form.js */ \"./src/scripts/add-form.js\");\n\n\nconst body = document.querySelector('body');\n\nfunction createHeader(){\n    const header = document.createElement('header');\n    header.setAttribute('id', 'just-header');\n\n    const head = document.createElement('h1');\n    head.textContent = \"Weather Forecast\";\n\n    header.appendChild(head);\n\n    body.appendChild(header);\n\n    (0,_add_form_js__WEBPACK_IMPORTED_MODULE_0__.appendForm)();\n    \n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/create-header.js?");

/***/ }),

/***/ "./src/scripts/fetch-data.js":
/*!***********************************!*\
  !*** ./src/scripts/fetch-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n\n\nasync function fetchData(cityName){\n    let apiKey = \"3960a7657494fab206ec2f3d86090e6f\"\n    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;\n\n    let data = await fetch(url);\n    let processedData = await data.json();\n\n    return processedData;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/fetch-data.js?");

/***/ }),

/***/ "./src/scripts/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/scripts/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var _create_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-header.js */ \"./src/scripts/create-header.js\");\n/* harmony import */ var _create_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-container.js */ \"./src/scripts/create-container.js\");\n/* harmony import */ var _search_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-button.js */ \"./src/scripts/search-button.js\");\n\n\n\n\n\nfunction setup(){\n    (0,_create_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n    (0,_create_container_js__WEBPACK_IMPORTED_MODULE_1__.createFirstContainer)();\n    (0,_search_button_js__WEBPACK_IMPORTED_MODULE_2__.searchButton)();\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/initial-page-load.js?");

/***/ }),

/***/ "./src/scripts/search-button.js":
/*!**************************************!*\
  !*** ./src/scripts/search-button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchButton\": () => (/* binding */ searchButton)\n/* harmony export */ });\n/* harmony import */ var _fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data.js */ \"./src/scripts/fetch-data.js\");\n/* harmony import */ var _create_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-container.js */ \"./src/scripts/create-container.js\");\n\n\n\nfunction searchButton(){\n    const form = document.querySelector('form');\n    const input = document.querySelector('input');\n\n    form.addEventListener('submit', async (event)=>{\n        event.preventDefault();\n        let inputValue = input.value.toLocaleUpperCase();\n        input.value = '';\n        inputValue.replace(/_/g, \"+\");\n\n        let inputData = await (0,_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(inputValue);\n        (0,_create_container_js__WEBPACK_IMPORTED_MODULE_1__.createWeatherCard)(inputData);\n\n    });\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/search-button.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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