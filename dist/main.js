/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./robotoFont/Roboto-Regular.ttf */ "./src/robotoFont/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./robotoFont/Roboto-Bold.ttf */ "./src/robotoFont/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/coffee-beans-true-background.jpg */ "./src/image/coffee-beans-true-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/coffee-maker.jpeg */ "./src/image/coffee-maker.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/coffee_book.jpeg */ "./src/image/coffee_book.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./image/neon-sign-4343663_1920.jpeg */ "./src/image/neon-sign-4343663_1920.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./image/coffee-bean.jpeg */ "./src/image/coffee-bean.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: roboto-bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --color-brown: #759283;\n    --title-color: #ba9c78;\n\n    --title-size: 2rem;\n    --button-size: 1.4rem;\n    --second-title-size: 1.4rem;\n    --text-size: 1.2rem;\n    --footer-text-size: 0.8rem;\n}\n\n* {\n    border: rgba(0, 255, 26, 0.274) solid 0px;\n    box-sizing: border-box;\n    font-family: roboto;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n\n    margin: 0;\n    min-height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: rgba(0, 0, 0, 0.9);\n    height: 100vh;\n    margin: 0 18%;\n\n    display: flex;\n    flex-direction: column;\n\n    color: white;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem 0;\n}\n\n.main {\n    height: 100%;\n    padding: 1rem 0;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 4rem 1fr 1fr;\n}\n\n.footer {\n    margin-top: auto;\n    text-align: center;\n}\n\n.footer > h4 {\n    margin: 0;\n    padding: 1rem 0;\n    font-size: var(--footer-text-size);\n}\n\n/* header button  */\nbutton {\n    background-color: transparent;\n    color: white;\n    font-size: var(--button-size);\n    font-weight: 700;\n    color: var(--color-brown);\n    font-family: roboto-bold;\n}\n\n/* main grid item */\nh1,\nh2 {\n    grid-area: 1/1 / 2/3;\n    justify-self: center;\n    align-self: center;\n    margin: 0;\n    padding: 0 0 1rem 0;\n    font-size: var(--title-size);\n}\n\n.img-coffee-maker {\n    grid-area: 2/2 / 3/3;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: left;\n}\n\n.img-coffee-book {\n    grid-area: 3/1 / 4/2;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right;\n}\n\n.description,\n.hour {\n    display: flex;\n    flex-direction: column;\n}\n\n.description {\n    padding: 0rem 1rem 1rem 3rem;\n    margin: 0;\n\n    justify-self: flex-end;\n    align-self: flex-start;\n\n    font-size: var(--text-size);\n    line-height: 1.7rem;\n    text-align: end;\n    white-space: pre;\n    color: var(--title-color);\n}\n.description > h3 {\n    margin: 0;\n}\n\n.description > p {\n    margin: 0;\n}\n\n.hour {\n    grid-area: 3/2 / 4/3;\n    padding: 1rem 1rem 1rem 1rem;\n    line-height: 1.8rem;\n    font-size: var(--text-size);\n}\n\n.hour > h3 {\n    margin: 0;\n}\n\nh3 {\n    font-size: var(--second-title-size);\n    color: var(--title-color);\n}\n\n/* contact page  */\n.contact-info {\n    grid-area: 2/1 / 3/3;\n    justify-self: center;\n    text-align: center;\n    margin-top: 4rem;\n    margin-bottom: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.contact-info > p {\n    font-size: var(--second-title-size);\n    margin: 0;\n}\n\n.contact-info:first-child {\n    font-size: var(--title-size);\n    color: var(--title-color);\n}\n\n.contact-img {\n    grid-area: 3/1/4/3;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 39%;\n}\n\n.menu {\n    grid-area: 2/1 / 4/2;\n    justify-self: center;\n    align-self: center;\n}\n\n.menu > p {\n    font-size: var(--text-size);\n}\n\n.menu-img1 {\n    grid-area: 2/2/4/3;\n    margin: 3rem 2rem 3rem 0rem;\n\n    opacity: 0.7;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat: no-repeat;\n    background-size: auto 120%;\n    background-position: bottom;\n\n    border-radius: 15px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAyC;AAC7C;AACA;IACI,wBAAwB;IACxB,4CAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;;IAEtB,kBAAkB;IAClB,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,yCAAyC;IACzC,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yDAA+D;IAC/D,sBAAsB;IACtB,4BAA4B;;IAE5B,SAAS;IACT,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,aAAa;;IAEb,aAAa;IACb,sBAAsB;;IAEtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kCAAkC;AACtC;;AAEA,mBAAmB;AACnB;IACI,6BAA6B;IAC7B,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;IAChB,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA,mBAAmB;AACnB;;IAEI,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;IAClB,SAAS;IACT,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,oBAAoB;IACpB,yDAAgD;IAChD,4BAA4B;IAC5B,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,yDAA+C;IAC/C,4BAA4B;IAC5B,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,SAAS;;IAET,sBAAsB;IACtB,sBAAsB;;IAEtB,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,4BAA4B;IAC5B,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA,kBAAkB;AAClB;IACI,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mCAAmC;IACnC,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yDAA0D;IAC1D,4BAA4B;IAC5B,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;;IAE3B,YAAY;IACZ,yDAA+C;IAC/C,4BAA4B;IAC5B,0BAA0B;IAC1B,2BAA2B;;IAE3B,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: roboto;\n    src: url(./robotoFont/Roboto-Regular.ttf);\n}\n@font-face {\n    font-family: roboto-bold;\n    src: url(./robotoFont/Roboto-Bold.ttf);\n}\n\n:root {\n    --color-brown: #759283;\n    --title-color: #ba9c78;\n\n    --title-size: 2rem;\n    --button-size: 1.4rem;\n    --second-title-size: 1.4rem;\n    --text-size: 1.2rem;\n    --footer-text-size: 0.8rem;\n}\n\n* {\n    border: rgba(0, 255, 26, 0.274) solid 0px;\n    box-sizing: border-box;\n    font-family: roboto;\n}\n\nbody {\n    background-image: url(./image/coffee-beans-true-background.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n\n    margin: 0;\n    min-height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: rgba(0, 0, 0, 0.9);\n    height: 100vh;\n    margin: 0 18%;\n\n    display: flex;\n    flex-direction: column;\n\n    color: white;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem 0;\n}\n\n.main {\n    height: 100%;\n    padding: 1rem 0;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 4rem 1fr 1fr;\n}\n\n.footer {\n    margin-top: auto;\n    text-align: center;\n}\n\n.footer > h4 {\n    margin: 0;\n    padding: 1rem 0;\n    font-size: var(--footer-text-size);\n}\n\n/* header button  */\nbutton {\n    background-color: transparent;\n    color: white;\n    font-size: var(--button-size);\n    font-weight: 700;\n    color: var(--color-brown);\n    font-family: roboto-bold;\n}\n\n/* main grid item */\nh1,\nh2 {\n    grid-area: 1/1 / 2/3;\n    justify-self: center;\n    align-self: center;\n    margin: 0;\n    padding: 0 0 1rem 0;\n    font-size: var(--title-size);\n}\n\n.img-coffee-maker {\n    grid-area: 2/2 / 3/3;\n    background-image: url(./image/coffee-maker.jpeg);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: left;\n}\n\n.img-coffee-book {\n    grid-area: 3/1 / 4/2;\n    background-image: url(./image/coffee_book.jpeg);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right;\n}\n\n.description,\n.hour {\n    display: flex;\n    flex-direction: column;\n}\n\n.description {\n    padding: 0rem 1rem 1rem 3rem;\n    margin: 0;\n\n    justify-self: flex-end;\n    align-self: flex-start;\n\n    font-size: var(--text-size);\n    line-height: 1.7rem;\n    text-align: end;\n    white-space: pre;\n    color: var(--title-color);\n}\n.description > h3 {\n    margin: 0;\n}\n\n.description > p {\n    margin: 0;\n}\n\n.hour {\n    grid-area: 3/2 / 4/3;\n    padding: 1rem 1rem 1rem 1rem;\n    line-height: 1.8rem;\n    font-size: var(--text-size);\n}\n\n.hour > h3 {\n    margin: 0;\n}\n\nh3 {\n    font-size: var(--second-title-size);\n    color: var(--title-color);\n}\n\n/* contact page  */\n.contact-info {\n    grid-area: 2/1 / 3/3;\n    justify-self: center;\n    text-align: center;\n    margin-top: 4rem;\n    margin-bottom: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.contact-info > p {\n    font-size: var(--second-title-size);\n    margin: 0;\n}\n\n.contact-info:first-child {\n    font-size: var(--title-size);\n    color: var(--title-color);\n}\n\n.contact-img {\n    grid-area: 3/1/4/3;\n    background-image: url(./image/neon-sign-4343663_1920.jpeg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 39%;\n}\n\n.menu {\n    grid-area: 2/1 / 4/2;\n    justify-self: center;\n    align-self: center;\n}\n\n.menu > p {\n    font-size: var(--text-size);\n}\n\n.menu-img1 {\n    grid-area: 2/2/4/3;\n    margin: 3rem 2rem 3rem 0rem;\n\n    opacity: 0.7;\n    background-image: url(./image/coffee-bean.jpeg);\n    background-repeat: no-repeat;\n    background-size: auto 120%;\n    background-position: bottom;\n\n    border-radius: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pageTitle = document.createElement('h2')
pageTitle.textContent = 'Information'

const div = document.createElement('div')
div.classList.add('contact-info')

const divImg = document.createElement('div')
divImg.classList.add('contact-img')

const template = (string) => {
    const p = document.createElement('p')
    p.classList.add('contact-info')
    p.textContent = string
    return { p }
}

const coffeeArt = template('CoffeeArt')
const address = template('3405 Best Coffee In The World, CoffeeLand, 73091')
const tel = template('coffee-339234')
const email = template('coffeeArt@love.coffee')

div.appendChild(coffeeArt.p)
div.appendChild(address.p)
div.appendChild(tel.p)
div.appendChild(email.p)

const contact = (main) => {
    main.appendChild(pageTitle)
    main.appendChild(div)
    main.appendChild(divImg)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/headerFooter.js":
/*!*****************************!*\
  !*** ./src/headerFooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactBtn": () => (/* binding */ contactBtn),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "homeBtn": () => (/* binding */ homeBtn),
/* harmony export */   "menuBtn": () => (/* binding */ menuBtn)
/* harmony export */ });
const button = (name) => {
    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.textContent = name
    return { btn }
}

const homeBtn = button('Home')
const contactBtn = button('Contact')
const menuBtn = button('Menu')

const header = (divContent) => {
    const headerTag = document.createElement('header')
    divContent.appendChild(headerTag)

    headerTag.appendChild(homeBtn.btn)
    headerTag.appendChild(contactBtn.btn)
    headerTag.appendChild(menuBtn.btn)

    homeBtn.btn.classList.add('home-btn')
    contactBtn.btn.classList.add('contact-btn')
    menuBtn.btn.classList.add('menu-btn')

    headerTag.classList.add('header')

    return { homeBtn }
}

const footer = (divContent) => {
    const footerTag = document.createElement('footer')
    const h4 = document.createElement('h4')
    h4.textContent = 'CoffeeArt'

    divContent.appendChild(footerTag)
    footerTag.appendChild(h4)

    footerTag.classList.add('footer')
}




/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "templateInfo": () => (/* binding */ templateInfo)
/* harmony export */ });
/* eslint-disable no-unused-vars */
const templateInfo = () => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    div.appendChild(h3)
    div.appendChild(p)

    return { div, h3, p }
}

const coffeeName = document.createElement('h1')
coffeeName.textContent = 'CoffeeArt'

const description = templateInfo()
description.div.classList.add('description')
description.h3.textContent = ''
description.p.textContent =
    'Come to our\nawesome coffee \nto enhance your creativity and\nto enjoy the best produce\nin the area.'

const hour = templateInfo()
hour.div.classList.add('hour')
hour.h3.textContent = 'Hour'
hour.p.setAttribute('style', 'white-space: pre;')
hour.p.textContent =
    'Sunday 8 to 13 \nMonday 8 to 13\nTuesday 8 to 13\nWednesday 8 to 13\nThursday 8 to 13\nFriday 8 to 13\nSaturday 8 to 13'

const divImg = () => {
    const div = document.createElement('div')
    return { div }
}

const coffeeMakerImage = divImg()
coffeeMakerImage.div.classList.add('img-coffee-maker')

const coffeeBookImage = divImg()
coffeeBookImage.div.classList.add('img-coffee-book')

const homePage = (main) => {
    main.appendChild(coffeeName)
    main.appendChild(description.div)
    main.appendChild(coffeeMakerImage.div)
    main.appendChild(coffeeBookImage.div)
    main.appendChild(hour.div)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuTitle = document.createElement('h2')
menuTitle.textContent = 'Menu'

const menuTemplate = (item, price) => {
    const p = document.createElement('p')
    p.textContent = `${item} : ${price}`
    return { p }
}

const divImg1 = document.createElement('div')
divImg1.classList.add('menu-img1')

const coffee = menuTemplate('Coffee', '2$')
const expresso = menuTemplate('Expresso', '2.50$')
const americano = menuTemplate('Americano', '3$')
const macchiato = menuTemplate('Macchiato', '4$')
const chaiLatte = menuTemplate('Chai Latte', '4$')

const divMenu = document.createElement('div')
divMenu.classList.add('menu')
divMenu.appendChild(coffee.p)
divMenu.appendChild(expresso.p)
divMenu.appendChild(americano.p)
divMenu.appendChild(macchiato.p)
divMenu.appendChild(chaiLatte.p)

const menu = (main) => {
    main.appendChild(menuTitle)
    main.appendChild(divMenu)
    main.appendChild(divImg1)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/image/coffee-bean.jpeg":
/*!************************************!*\
  !*** ./src/image/coffee-bean.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4559890dfa2a4c18f846.jpeg";

/***/ }),

/***/ "./src/image/coffee-beans-true-background.jpg":
/*!****************************************************!*\
  !*** ./src/image/coffee-beans-true-background.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e011424edabda24f3c03.jpg";

/***/ }),

/***/ "./src/image/coffee-maker.jpeg":
/*!*************************************!*\
  !*** ./src/image/coffee-maker.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46eb288586937eae6ce2.jpeg";

/***/ }),

/***/ "./src/image/coffee_book.jpeg":
/*!************************************!*\
  !*** ./src/image/coffee_book.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02c1e9772077ed416f06.jpeg";

/***/ }),

/***/ "./src/image/neon-sign-4343663_1920.jpeg":
/*!***********************************************!*\
  !*** ./src/image/neon-sign-4343663_1920.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "291d5a75db59d357a9c3.jpeg";

/***/ }),

/***/ "./src/robotoFont/Roboto-Bold.ttf":
/*!****************************************!*\
  !*** ./src/robotoFont/Roboto-Bold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/robotoFont/Roboto-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/robotoFont/Roboto-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _headerFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerFooter */ "./src/headerFooter.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







// container
const body = document.querySelector('body')
const divContent = document.createElement('div')
body.appendChild(divContent)
divContent.setAttribute('id', 'content')

// main
const main = document.createElement('main')
main.classList.add('main')

// Change page feature
function mainEmpty() {
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild)
    }
}

// content
(0,_headerFooter__WEBPACK_IMPORTED_MODULE_1__.header)(divContent)
divContent.appendChild(main)
;(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])(main)

_headerFooter__WEBPACK_IMPORTED_MODULE_1__.homeBtn.btn.addEventListener('click', () => {
    mainEmpty()
    ;(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])(main)
})
_headerFooter__WEBPACK_IMPORTED_MODULE_1__.contactBtn.btn.addEventListener('click', () => {
    mainEmpty()
    ;(0,_contactPage__WEBPACK_IMPORTED_MODULE_2__["default"])(main)
})
_headerFooter__WEBPACK_IMPORTED_MODULE_1__.menuBtn.btn.addEventListener('click', () => {
    mainEmpty()
    ;(0,_menuPage__WEBPACK_IMPORTED_MODULE_3__["default"])(main)
})

;(0,_headerFooter__WEBPACK_IMPORTED_MODULE_1__.footer)(divContent)

console.log('love')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUM0QztBQUMxQztBQUNOOztBQUVUOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBTTtBQUNOO0FBQ0Esc0RBQVE7O0FBRVIsdUVBQTRCO0FBQzVCO0FBQ0EsSUFBSSxzREFBUTtBQUNaLENBQUM7QUFDRCwwRUFBK0I7QUFDL0I7QUFDQSxJQUFJLHlEQUFPO0FBQ1gsQ0FBQztBQUNELHVFQUE0QjtBQUM1QjtBQUNBLElBQUksc0RBQUk7QUFDUixDQUFDOztBQUVELHNEQUFNOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9oZWFkZXJGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG9Gb250L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcm9ib3RvRm9udC9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlL2NvZmZlZS1iZWFucy10cnVlLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS9jb2ZmZWUtbWFrZXIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2UvY29mZmVlX2Jvb2suanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2UvbmVvbi1zaWduLTQzNDM2NjNfMTkyMC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS9jb2ZmZWUtYmVhbi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tYm9sZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItYnJvd246ICM3NTkyODM7XFxuICAgIC0tdGl0bGUtY29sb3I6ICNiYTljNzg7XFxuXFxuICAgIC0tdGl0bGUtc2l6ZTogMnJlbTtcXG4gICAgLS1idXR0b24tc2l6ZTogMS40cmVtO1xcbiAgICAtLXNlY29uZC10aXRsZS1zaXplOiAxLjRyZW07XFxuICAgIC0tdGV4dC1zaXplOiAxLjJyZW07XFxuICAgIC0tZm9vdGVyLXRleHQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4qIHtcXG4gICAgYm9yZGVyOiByZ2JhKDAsIDI1NSwgMjYsIDAuMjc0KSBzb2xpZCAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMTglO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgMWZyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gaDQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItdGV4dC1zaXplKTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiAgKi9cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJyb3duKTtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xcbn1cXG5cXG4vKiBtYWluIGdyaWQgaXRlbSAqL1xcbmgxLFxcbmgyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEgLyAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1zaXplKTtcXG59XFxuXFxuLmltZy1jb2ZmZWUtbWFrZXIge1xcbiAgICBncmlkLWFyZWE6IDIvMiAvIDMvMztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG4uaW1nLWNvZmZlZS1ib29rIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEgLyA0LzI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbixcXG4uaG91ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbSAxcmVtIDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZXNjcmlwdGlvbiA+IGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaG91ciB7XFxuICAgIGdyaWQtYXJlYTogMy8yIC8gNC8zO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XFxufVxcblxcbi5ob3VyID4gaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zZWNvbmQtdGl0bGUtc2l6ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcblxcbi8qIGNvbnRhY3QgcGFnZSAgKi9cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEgLyAzLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNlY29uZC10aXRsZS1zaXplKTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhY3QtaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMzklO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogMi8xIC8gNC8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XFxufVxcblxcbi5tZW51LWltZzEge1xcbiAgICBncmlkLWFyZWE6IDIvMi80LzM7XFxuICAgIG1hcmdpbjogM3JlbSAycmVtIDNyZW0gMHJlbTtcXG5cXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTIwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUF5QztBQUM3QztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlEQUErRDtJQUMvRCxzQkFBc0I7SUFDdEIsNEJBQTRCOztJQUU1QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlOztJQUVmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBLG1CQUFtQjtBQUNuQjs7SUFFSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5REFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseURBQStDO0lBQy9DLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsU0FBUzs7SUFFVCxzQkFBc0I7SUFDdEIsc0JBQXNCOztJQUV0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseURBQTBEO0lBQzFELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCOztJQUUzQixZQUFZO0lBQ1oseURBQStDO0lBQy9DLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsMkJBQTJCOztJQUUzQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAgIHNyYzogdXJsKC4vcm9ib3RvRm9udC9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xcbiAgICBzcmM6IHVybCguL3JvYm90b0ZvbnQvUm9ib3RvLUJvbGQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLWJyb3duOiAjNzU5MjgzO1xcbiAgICAtLXRpdGxlLWNvbG9yOiAjYmE5Yzc4O1xcblxcbiAgICAtLXRpdGxlLXNpemU6IDJyZW07XFxuICAgIC0tYnV0dG9uLXNpemU6IDEuNHJlbTtcXG4gICAgLS1zZWNvbmQtdGl0bGUtc2l6ZTogMS40cmVtO1xcbiAgICAtLXRleHQtc2l6ZTogMS4ycmVtO1xcbiAgICAtLWZvb3Rlci10ZXh0LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuKiB7XFxuICAgIGJvcmRlcjogcmdiYSgwLCAyNTUsIDI2LCAwLjI3NCkgc29saWQgMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2UvY29mZmVlLWJlYW5zLXRydWUtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMTglO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgMWZyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gaDQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItdGV4dC1zaXplKTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiAgKi9cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJyb3duKTtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xcbn1cXG5cXG4vKiBtYWluIGdyaWQgaXRlbSAqL1xcbmgxLFxcbmgyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEgLyAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1zaXplKTtcXG59XFxuXFxuLmltZy1jb2ZmZWUtbWFrZXIge1xcbiAgICBncmlkLWFyZWE6IDIvMiAvIDMvMztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2UvY29mZmVlLW1ha2VyLmpwZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVxcblxcbi5pbWctY29mZmVlLWJvb2sge1xcbiAgICBncmlkLWFyZWE6IDMvMSAvIDQvMjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2UvY29mZmVlX2Jvb2suanBlZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbixcXG4uaG91ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbSAxcmVtIDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZXNjcmlwdGlvbiA+IGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaG91ciB7XFxuICAgIGdyaWQtYXJlYTogMy8yIC8gNC8zO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XFxufVxcblxcbi5ob3VyID4gaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zZWNvbmQtdGl0bGUtc2l6ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcblxcbi8qIGNvbnRhY3QgcGFnZSAgKi9cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEgLyAzLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNlY29uZC10aXRsZS1zaXplKTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhY3QtaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZS9uZW9uLXNpZ24tNDM0MzY2M18xOTIwLmpwZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMzklO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogMi8xIC8gNC8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XFxufVxcblxcbi5tZW51LWltZzEge1xcbiAgICBncmlkLWFyZWE6IDIvMi80LzM7XFxuICAgIG1hcmdpbjogM3JlbSAycmVtIDNyZW0gMHJlbTtcXG5cXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZS9jb2ZmZWUtYmVhbi5qcGVnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEyMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnSW5mb3JtYXRpb24nXG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJylcblxuY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpdkltZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWltZycpXG5cbmNvbnN0IHRlbXBsYXRlID0gKHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpXG4gICAgcC50ZXh0Q29udGVudCA9IHN0cmluZ1xuICAgIHJldHVybiB7IHAgfVxufVxuXG5jb25zdCBjb2ZmZWVBcnQgPSB0ZW1wbGF0ZSgnQ29mZmVlQXJ0JylcbmNvbnN0IGFkZHJlc3MgPSB0ZW1wbGF0ZSgnMzQwNSBCZXN0IENvZmZlZSBJbiBUaGUgV29ybGQsIENvZmZlZUxhbmQsIDczMDkxJylcbmNvbnN0IHRlbCA9IHRlbXBsYXRlKCdjb2ZmZWUtMzM5MjM0JylcbmNvbnN0IGVtYWlsID0gdGVtcGxhdGUoJ2NvZmZlZUFydEBsb3ZlLmNvZmZlZScpXG5cbmRpdi5hcHBlbmRDaGlsZChjb2ZmZWVBcnQucClcbmRpdi5hcHBlbmRDaGlsZChhZGRyZXNzLnApXG5kaXYuYXBwZW5kQ2hpbGQodGVsLnApXG5kaXYuYXBwZW5kQ2hpbGQoZW1haWwucClcblxuY29uc3QgY29udGFjdCA9IChtYWluKSA9PiB7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlVGl0bGUpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZJbWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RcbiIsImNvbnN0IGJ1dHRvbiA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnRuLnRleHRDb250ZW50ID0gbmFtZVxuICAgIHJldHVybiB7IGJ0biB9XG59XG5cbmNvbnN0IGhvbWVCdG4gPSBidXR0b24oJ0hvbWUnKVxuY29uc3QgY29udGFjdEJ0biA9IGJ1dHRvbignQ29udGFjdCcpXG5jb25zdCBtZW51QnRuID0gYnV0dG9uKCdNZW51JylcblxuY29uc3QgaGVhZGVyID0gKGRpdkNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBoZWFkZXJUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyVGFnKVxuXG4gICAgaGVhZGVyVGFnLmFwcGVuZENoaWxkKGhvbWVCdG4uYnRuKVxuICAgIGhlYWRlclRhZy5hcHBlbmRDaGlsZChjb250YWN0QnRuLmJ0bilcbiAgICBoZWFkZXJUYWcuYXBwZW5kQ2hpbGQobWVudUJ0bi5idG4pXG5cbiAgICBob21lQnRuLmJ0bi5jbGFzc0xpc3QuYWRkKCdob21lLWJ0bicpXG4gICAgY29udGFjdEJ0bi5idG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idG4nKVxuICAgIG1lbnVCdG4uYnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJylcblxuICAgIGhlYWRlclRhZy5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4gICAgcmV0dXJuIHsgaG9tZUJ0biB9XG59XG5cbmNvbnN0IGZvb3RlciA9IChkaXZDb250ZW50KSA9PiB7XG4gICAgY29uc3QgZm9vdGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICBoNC50ZXh0Q29udGVudCA9ICdDb2ZmZWVBcnQnXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclRhZylcbiAgICBmb290ZXJUYWcuYXBwZW5kQ2hpbGQoaDQpXG5cbiAgICBmb290ZXJUYWcuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbn1cblxuZXhwb3J0IHsgaGVhZGVyLCBob21lQnRuLCBjb250YWN0QnRuLCBtZW51QnRuLCBmb290ZXIgfVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpXG4gICAgZGl2LmFwcGVuZENoaWxkKHApXG5cbiAgICByZXR1cm4geyBkaXYsIGgzLCBwIH1cbn1cblxuY29uc3QgY29mZmVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmNvZmZlZU5hbWUudGV4dENvbnRlbnQgPSAnQ29mZmVlQXJ0J1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IHRlbXBsYXRlSW5mbygpXG5kZXNjcmlwdGlvbi5kaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuZGVzY3JpcHRpb24uaDMudGV4dENvbnRlbnQgPSAnJ1xuZGVzY3JpcHRpb24ucC50ZXh0Q29udGVudCA9XG4gICAgJ0NvbWUgdG8gb3VyXFxuYXdlc29tZSBjb2ZmZWUgXFxudG8gZW5oYW5jZSB5b3VyIGNyZWF0aXZpdHkgYW5kXFxudG8gZW5qb3kgdGhlIGJlc3QgcHJvZHVjZVxcbmluIHRoZSBhcmVhLidcblxuY29uc3QgaG91ciA9IHRlbXBsYXRlSW5mbygpXG5ob3VyLmRpdi5jbGFzc0xpc3QuYWRkKCdob3VyJylcbmhvdXIuaDMudGV4dENvbnRlbnQgPSAnSG91cidcbmhvdXIucC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7JylcbmhvdXIucC50ZXh0Q29udGVudCA9XG4gICAgJ1N1bmRheSA4IHRvIDEzIFxcbk1vbmRheSA4IHRvIDEzXFxuVHVlc2RheSA4IHRvIDEzXFxuV2VkbmVzZGF5IDggdG8gMTNcXG5UaHVyc2RheSA4IHRvIDEzXFxuRnJpZGF5IDggdG8gMTNcXG5TYXR1cmRheSA4IHRvIDEzJ1xuXG5jb25zdCBkaXZJbWcgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXR1cm4geyBkaXYgfVxufVxuXG5jb25zdCBjb2ZmZWVNYWtlckltYWdlID0gZGl2SW1nKClcbmNvZmZlZU1ha2VySW1hZ2UuZGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1jb2ZmZWUtbWFrZXInKVxuXG5jb25zdCBjb2ZmZWVCb29rSW1hZ2UgPSBkaXZJbWcoKVxuY29mZmVlQm9va0ltYWdlLmRpdi5jbGFzc0xpc3QuYWRkKCdpbWctY29mZmVlLWJvb2snKVxuXG5jb25zdCBob21lUGFnZSA9IChtYWluKSA9PiB7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb2ZmZWVOYW1lKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uZGl2KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29mZmVlTWFrZXJJbWFnZS5kaXYpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb2ZmZWVCb29rSW1hZ2UuZGl2KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG91ci5kaXYpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlXG4iLCJjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5tZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSdcblxuY29uc3QgbWVudVRlbXBsYXRlID0gKGl0ZW0sIHByaWNlKSA9PiB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHAudGV4dENvbnRlbnQgPSBgJHtpdGVtfSA6ICR7cHJpY2V9YFxuICAgIHJldHVybiB7IHAgfVxufVxuXG5jb25zdCBkaXZJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpdkltZzEuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWcxJylcblxuY29uc3QgY29mZmVlID0gbWVudVRlbXBsYXRlKCdDb2ZmZWUnLCAnMiQnKVxuY29uc3QgZXhwcmVzc28gPSBtZW51VGVtcGxhdGUoJ0V4cHJlc3NvJywgJzIuNTAkJylcbmNvbnN0IGFtZXJpY2FubyA9IG1lbnVUZW1wbGF0ZSgnQW1lcmljYW5vJywgJzMkJylcbmNvbnN0IG1hY2NoaWF0byA9IG1lbnVUZW1wbGF0ZSgnTWFjY2hpYXRvJywgJzQkJylcbmNvbnN0IGNoYWlMYXR0ZSA9IG1lbnVUZW1wbGF0ZSgnQ2hhaSBMYXR0ZScsICc0JCcpXG5cbmNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGl2TWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbmRpdk1lbnUuYXBwZW5kQ2hpbGQoY29mZmVlLnApXG5kaXZNZW51LmFwcGVuZENoaWxkKGV4cHJlc3NvLnApXG5kaXZNZW51LmFwcGVuZENoaWxkKGFtZXJpY2Fuby5wKVxuZGl2TWVudS5hcHBlbmRDaGlsZChtYWNjaGlhdG8ucClcbmRpdk1lbnUuYXBwZW5kQ2hpbGQoY2hhaUxhdHRlLnApXG5cbmNvbnN0IG1lbnUgPSAobWFpbikgPT4ge1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2TWVudSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkltZzEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lUGFnZSdcbmltcG9ydCB7IGZvb3RlciwgaGVhZGVyLCBob21lQnRuLCBjb250YWN0QnRuLCBtZW51QnRuIH0gZnJvbSAnLi9oZWFkZXJGb290ZXInXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3RQYWdlJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51UGFnZSdcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuLy8gY29udGFpbmVyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJvZHkuYXBwZW5kQ2hpbGQoZGl2Q29udGVudClcbmRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcblxuLy8gbWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuLy8gQ2hhbmdlIHBhZ2UgZmVhdHVyZVxuZnVuY3Rpb24gbWFpbkVtcHR5KCkge1xuICAgIHdoaWxlIChtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbi8vIGNvbnRlbnRcbmhlYWRlcihkaXZDb250ZW50KVxuZGl2Q29udGVudC5hcHBlbmRDaGlsZChtYWluKVxuaG9tZVBhZ2UobWFpbilcblxuaG9tZUJ0bi5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFpbkVtcHR5KClcbiAgICBob21lUGFnZShtYWluKVxufSlcbmNvbnRhY3RCdG4uYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1haW5FbXB0eSgpXG4gICAgY29udGFjdChtYWluKVxufSlcbm1lbnVCdG4uYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1haW5FbXB0eSgpXG4gICAgbWVudShtYWluKVxufSlcblxuZm9vdGVyKGRpdkNvbnRlbnQpXG5cbmNvbnNvbGUubG9nKCdsb3ZlJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==