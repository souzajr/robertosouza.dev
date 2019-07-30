module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-safe */ "react-safe");
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_safe__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Footer.js";





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    id: "Contato",
    className: "jsx-2999660320" + " " + "page-footer grey lighten-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "col l6 s12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-2999660320" + " " + "indigo-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Ficou com d\xFAvida?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2999660320" + " " + "indigo-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Entre em contato atrav\xE9s das redes sociais ou mande um Email :)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "col l4 offset-l2 s12 btn-social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    waves: "light",
    node: "a",
    href: "https://www.facebook.com/robertosouza1995",
    tooltip: "Facebook",
    tooltipOptions: {
      position: 'top'
    },
    style: {
      padding: '0 13px',
      borderRadius: '5px',
      marginLeft: '8px',
      background: '#3b5999'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2999660320" + " " + "fab fa-facebook-square icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    waves: "light",
    node: "a",
    href: "https://github.com/souzajr",
    tooltip: "Github",
    tooltipOptions: {
      position: 'top'
    },
    style: {
      padding: '0 13px',
      borderRadius: '5px',
      marginLeft: '8px',
      background: '#222'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2999660320" + " " + "fab fa-github icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    waves: "light",
    node: "a",
    href: "https://wa.me/5519995877791",
    tooltip: "WhatsApp",
    tooltipOptions: {
      position: 'top'
    },
    style: {
      padding: '0 13px',
      borderRadius: '5px',
      marginLeft: '8px',
      background: '#25d366'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2999660320" + " " + "fab fa-whatsapp icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    waves: "light",
    node: "a",
    href: "https://www.linkedin.com/in/roberto-souza1/",
    tooltip: "LinkedIn",
    tooltipOptions: {
      position: 'top'
    },
    style: {
      padding: '0 13px',
      borderRadius: '5px',
      marginLeft: '8px',
      background: '#283e4a'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2999660320" + " " + "fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    waves: "light",
    node: "a",
    href: "mailto:robertos.cps@gmail.com",
    tooltip: "Email",
    tooltipOptions: {
      position: 'top'
    },
    style: {
      padding: '0 13px',
      borderRadius: '5px',
      marginLeft: '8px',
      background: '#ea4c89'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2999660320" + " " + "fas fa-envelope icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "footer-copyright indigo-text ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2999660320" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\xA9 2019 Roberto Souza", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/souzajr/robertosouza.dev/",
    className: "jsx-2999660320" + " " + "grey-text text-darken-3 right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Veja este projeto no Github"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2999660320",
    __self: this
  }, "p.jsx-2999660320{font-size:20px;}.btn-social-buttons.jsx-2999660320{margin-top:50px;}.icon.jsx-2999660320{font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm9iZXJ0b1xcRG9jdW1lbnRzXFxUcmFiYWxob1xcUm9iZXJ0b1NvdXphRGV2XFxyb2JlcnRvc291emEuZGV2XFxmcm9udGVuZFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHZ0MsQUFJQyxBQUlELGVBUG5CLEFBUUEsQ0FKQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJvYmVydG9cXERvY3VtZW50c1xcVHJhYmFsaG9cXFJvYmVydG9Tb3V6YURldlxccm9iZXJ0b3NvdXphLmRldlxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJ1xyXG5pbXBvcnQgU2FmZSBmcm9tIFwicmVhY3Qtc2FmZVwiXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8Zm9vdGVyIGlkPVwiQ29udGF0b1wiIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGdyZXkgbGlnaHRlbi0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGw2IHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbmRpZ28tdGV4dFwiPkZpY291IGNvbSBkw7p2aWRhPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kaWdvLXRleHQgdGV4dC1kYXJrZW4tNFwiPkVudHJlIGVtIGNvbnRhdG8gYXRyYXbDqXMgZGFzIHJlZGVzIHNvY2lhaXMgb3UgbWFuZGUgdW0gRW1haWwgOik8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGw0IG9mZnNldC1sMiBzMTIgYnRuLXNvY2lhbC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlcz1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3JvYmVydG9zb3V6YTE5OTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiRmFjZWJvb2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwT3B0aW9ucz17e3Bvc2l0aW9uOiAndG9wJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjM2I1OTk5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmUgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVzPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc291emFqclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJHaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwT3B0aW9ucz17e3Bvc2l0aW9uOiAndG9wJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVzPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3dhLm1lLzU1MTk5OTU4Nzc3OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2hhdHNBcHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwT3B0aW9ucz17e3Bvc2l0aW9uOiAndG9wJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjVkMzY2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZXM9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yb2JlcnRvLXNvdXphMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwT3B0aW9ucz17e3Bvc2l0aW9uOiAndG9wJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjgzZTRhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmVzPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86cm9iZXJ0b3MuY3BzQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBPcHRpb25zPXt7cG9zaXRpb246ICd0b3AnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDEzcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlYTRjODknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0IGluZGlnby10ZXh0IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPsKpIDIwMTkgUm9iZXJ0byBTb3V6YVxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtZGFya2VuLTMgcmlnaHRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NvdXphanIvcm9iZXJ0b3NvdXphLmRldi9cIj5WZWphIGVzdGUgcHJvamV0byBubyBHaXRodWI8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXNvY2lhbC1idXR0b25zIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPFNhZmUuc2NyaXB0PntgXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnVUEtMTIwMjQwODcyLTInKTtcclxuICAgICAgICBgfTwvU2FmZS5zY3JpcHQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Footer.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_safe__WEBPACK_IMPORTED_MODULE_3___default.a.script, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            \n            gtag('config', 'UA-120240872-2');\n        "));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-safe */ "react-safe");
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_safe__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Home.js";





var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Sobre",
    className: "jsx-1183569416" + " " + "parallax-container valign-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1183569416" + " " + "header white-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    style: {
      textDecoration: "purple underline"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Sobre")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-image size-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./assets/roberto.jpg */ "./components/assets/roberto.jpg"),
    alt: "Roberto Souza",
    height: "205px",
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-stacked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Programo por hobby desde que me conhe\xE7o por gente, quando pequeno eu j\xE1 mostrava interesse por n\xFAmeros e por tecnologia. Resolvi seguir a carreira de programador h\xE1 pouco mais de dois anos, quando decidi abrir meu pr\xF3prio neg\xF3cio. De l\xE1 at\xE9 aqui a jornada de aprendizado foi grande e satisfat\xF3ria, hoje me considero um profissional ainda em fase de aprendizado, por\xE9m com experi\xEAncia e muita vontade de crescer.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-action size-screen-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://drive.google.com/file/d/1UN0gEY2ZFO6b865x2i4ysyTUrZNl--5k/view?usp=sharing",
    className: "jsx-1183569416" + " " + "waves-effect waves-light btn purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "cloud_download"), "Baixar curr\xEDculo"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "parallax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./assets/background.jpg */ "./components/assets/background.jpg"),
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "50px"
    },
    className: "jsx-1183569416" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Skills",
    className: "jsx-1183569416" + " " + "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1183569416" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    style: {
      textDecoration: "purple underline"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-nodejs-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-html5-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-css3-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-mongodb-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "row center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-react-original-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-nginx-original-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-postgresql-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-sass-original  really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "row center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-github-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-amazonwebservices-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-docker-plain-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l3 separate-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "devicon-express-original-wordmark really-big-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "120px"
    },
    className: "jsx-1183569416" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Projetos",
    className: "jsx-1183569416" + " " + "col s12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1183569416" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    style: {
      textDecoration: "purple underline"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Projetos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-image waves-effect waves-block waves-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./assets/TM1.png */ "./components/assets/TM1.png"),
    className: "jsx-1183569416" + " " + "activator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title activator grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "TR\xCAS MAIS TR\xCAS", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Tr\xEAs Mais Tr\xEAs \xE9 uma ag\xEAncia impulsionadora de redes sociais, excelente para empresas que buscam mais espa\xE7o e destaque no meio digital.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://tresmaistres.com.br",
    className: "jsx-1183569416" + " " + "purple-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "link"), " Ver site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Servi\xE7os prestados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Constru\xE7\xE3o de site com tema exclusivo e eCommerce com integra\xE7\xE3o com gateways de pagamento.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-image waves-effect waves-block waves-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./assets/FD1.png */ "./components/assets/FD1.png"),
    className: "jsx-1183569416" + " " + "activator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title activator grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "FULLDNA", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "O portal FullDNA pertence a uma startup israelense que atua na \xE1rea da sa\xFAde e oferece testes de DNA que podem diagnosticar centenas de milhares de doen\xE7as.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://fulldna.com.br",
    className: "jsx-1183569416" + " " + "purple-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "link"), " Ver site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Servi\xE7os prestados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Constru\xE7\xE3o de site com tema exclusivo e desenvolvimento completo Back-End. Integra\xE7\xE3o total com o PayPal e envio em massa de comiss\xF5es.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "col s12 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-image waves-effect waves-block waves-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./assets/GL1.png */ "./components/assets/GL1.png"),
    className: "jsx-1183569416" + " " + "activator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title activator grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "GAMESLL", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "A loja GamesLL oferece jogos em diversas m\xEDdias, consoles e acess\xF3rios para gamers e entusiastas. Com lan\xE7amentos e pre\xE7os baixos, a loja promete ser um sucesso!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://gamesll.com.br/",
    className: "jsx-1183569416" + " " + "purple-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "link"), " Ver site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1183569416" + " " + "card-reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1183569416" + " " + "card-title grey-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Servi\xE7os prestados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1183569416" + " " + "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "justify"
    },
    className: "jsx-1183569416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Constru\xE7\xE3o de site com tema exclusivo e eCommerce com integra\xE7\xE3o com gateways de pagamento."))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1183569416",
    __self: this
  }, "@media screen and (max-width:992px){.size-screen.jsx-1183569416{display:none;}.size-screen-card.jsx-1183569416{text-align:center;}}.really-big-icon.jsx-1183569416{font-size:120px;}@media screen and (max-width:992px){.really-big-icon.jsx-1183569416{display:inline-block;margin-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm9iZXJ0b1xcRG9jdW1lbnRzXFxUcmFiYWxob1xcUm9iZXJ0b1NvdXphRGV2XFxyb2JlcnRvc291emEuZGV2XFxmcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSXdCLEFBSXNDLEFBSUssQUFLTixBQUtTLGFBYnpCLEdBU0osRUFMSSxHQVVvQixnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSb2JlcnRvXFxEb2N1bWVudHNcXFRyYWJhbGhvXFxSb2JlcnRvU291emFEZXZcXHJvYmVydG9zb3V6YS5kZXZcXGZyb250ZW5kXFxjb21wb25lbnRzXFxIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcclxuaW1wb3J0IFNhZmUgZnJvbSBcInJlYWN0LXNhZmVcIlxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJTb2JyZVwiIGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRhaW5lciB2YWxpZ24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgd2hpdGUtdGV4dFwiPjx1IHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwicHVycGxlIHVuZGVybGluZVwifX0+U29icmU8L3U+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2Ugc2l6ZS1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuL2Fzc2V0cy9yb2JlcnRvLmpwZycpfSBhbHQ9XCJSb2JlcnRvIFNvdXphXCIgaGVpZ2h0PVwiMjA1cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwianVzdGlmeVwifX0+UHJvZ3JhbW8gcG9yIGhvYmJ5IGRlc2RlIHF1ZSBtZSBjb25oZcOnbyBwb3IgZ2VudGUsIHF1YW5kbyBwZXF1ZW5vIGV1IGrDoSBtb3N0cmF2YSBpbnRlcmVzc2UgcG9yIG7Dum1lcm9zIGUgcG9yIHRlY25vbG9naWEuIFJlc29sdmkgc2VndWlyIGEgY2FycmVpcmEgZGUgcHJvZ3JhbWFkb3IgaMOhIHBvdWNvIG1haXMgZGUgZG9pcyBhbm9zLCBxdWFuZG8gZGVjaWRpIGFicmlyIG1ldSBwcsOzcHJpbyBuZWfDs2Npby4gRGUgbMOhIGF0w6kgYXF1aSBhIGpvcm5hZGEgZGUgYXByZW5kaXphZG8gZm9pIGdyYW5kZSBlIHNhdGlzZmF0w7NyaWEsIGhvamUgbWUgY29uc2lkZXJvIHVtIHByb2Zpc3Npb25hbCBhaW5kYSBlbSBmYXNlIGRlIGFwcmVuZGl6YWRvLCBwb3LDqW0gY29tIGV4cGVyacOqbmNpYSBlIG11aXRhIHZvbnRhZGUgZGUgY3Jlc2Nlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb24gc2l6ZS1zY3JlZW4tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVTjBnRVkyWkZPNmI4NjV4Mmk0eXN5VFVyWk5sLS01ay92aWV3P3VzcD1zaGFyaW5nXCIgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBwdXJwbGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2xvdWRfZG93bmxvYWQ8L2k+QmFpeGFyIGN1cnLDrWN1bG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4vYXNzZXRzL2JhY2tncm91bmQuanBnJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjUwcHhcIn19PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIlNraWxsc1wiIGNsYXNzTmFtZT1cImNlbnRlci1hbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj48dSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcInB1cnBsZSB1bmRlcmxpbmVcIn19PlNraWxsczwvdT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsMyBzZXBhcmF0ZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLW5vZGVqcy1wbGFpbi13b3JkbWFyayByZWFsbHktYmlnLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDMgc2VwYXJhdGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1odG1sNS1wbGFpbi13b3JkbWFyayByZWFsbHktYmlnLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDMgc2VwYXJhdGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1jc3MzLXBsYWluLXdvcmRtYXJrIHJlYWxseS1iaWctaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsMyBzZXBhcmF0ZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLW1vbmdvZGItcGxhaW4td29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjZW50ZXItYWxpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGwzIHNlcGFyYXRlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tcmVhY3Qtb3JpZ2luYWwtd29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGwzIHNlcGFyYXRlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tbmdpbngtb3JpZ2luYWwtd29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGwzIHNlcGFyYXRlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tcG9zdGdyZXNxbC1wbGFpbi13b3JkbWFyayByZWFsbHktYmlnLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDMgc2VwYXJhdGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1zYXNzLW9yaWdpbmFsICByZWFsbHktYmlnLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNlbnRlci1hbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDMgc2VwYXJhdGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGV2aWNvbi1naXRodWItcGxhaW4td29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGwzIHNlcGFyYXRlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tYW1hem9ud2Vic2VydmljZXMtcGxhaW4td29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGwzIHNlcGFyYXRlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRldmljb24tZG9ja2VyLXBsYWluLXdvcmRtYXJrIHJlYWxseS1iaWctaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsMyBzZXBhcmF0ZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkZXZpY29uLWV4cHJlc3Mtb3JpZ2luYWwtd29yZG1hcmsgcmVhbGx5LWJpZy1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTIwcHhcIn19PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIlByb2pldG9zXCIgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj48dSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcInB1cnBsZSB1bmRlcmxpbmVcIn19PlByb2pldG9zPC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWJsb2NrIHdhdmVzLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWN0aXZhdG9yXCIgIHNyYz17cmVxdWlyZSgnLi9hc3NldHMvVE0xLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhY3RpdmF0b3IgZ3JleS10ZXh0IHRleHQtZGFya2VuLTRcIj5UUsOKUyBNQUlTIFRSw4pTPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5tb3JlX3ZlcnQ8L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogXCJqdXN0aWZ5XCJ9fT5UcsOqcyBNYWlzIFRyw6pzIMOpIHVtYSBhZ8OqbmNpYSBpbXB1bHNpb25hZG9yYSBkZSByZWRlcyBzb2NpYWlzLCBleGNlbGVudGUgcGFyYSBlbXByZXNhcyBxdWUgYnVzY2FtIG1haXMgZXNwYcOnbyBlIGRlc3RhcXVlIG5vIG1laW8gZGlnaXRhbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwdXJwbGUtdGV4dFwiIGhyZWY9XCJodHRwczovL3RyZXNtYWlzdHJlcy5jb20uYnJcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmxpbms8L2k+IFZlciBzaXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1yZXZlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBncmV5LXRleHQgdGV4dC1kYXJrZW4tNFwiPlNlcnZpw6dvcyBwcmVzdGFkb3M8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmNsb3NlPC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwianVzdGlmeVwifX0+Q29uc3RydcOnw6NvIGRlIHNpdGUgY29tIHRlbWEgZXhjbHVzaXZvIGUgZUNvbW1lcmNlIGNvbSBpbnRlZ3Jhw6fDo28gY29tIGdhdGV3YXlzIGRlIHBhZ2FtZW50by48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlIHdhdmVzLWVmZmVjdCB3YXZlcy1ibG9jayB3YXZlcy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjdGl2YXRvclwiICBzcmM9e3JlcXVpcmUoJy4vYXNzZXRzL0ZEMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWN0aXZhdG9yIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+RlVMTEROQTxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+bW9yZV92ZXJ0PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwianVzdGlmeVwifX0+TyBwb3J0YWwgRnVsbEROQSBwZXJ0ZW5jZSBhIHVtYSBzdGFydHVwIGlzcmFlbGVuc2UgcXVlIGF0dWEgbmEgw6FyZWEgZGEgc2HDumRlIGUgb2ZlcmVjZSB0ZXN0ZXMgZGUgRE5BIHF1ZSBwb2RlbSBkaWFnbm9zdGljYXIgY2VudGVuYXMgZGUgbWlsaGFyZXMgZGUgZG9lbsOnYXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHVycGxlLXRleHRcIiBocmVmPVwiaHR0cHM6Ly9mdWxsZG5hLmNvbS5iclwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+bGluazwvaT4gVmVyIHNpdGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXJldmVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+U2VydmnDp29zIHByZXN0YWRvczxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+Y2xvc2U8L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogXCJqdXN0aWZ5XCJ9fT5Db25zdHJ1w6fDo28gZGUgc2l0ZSBjb20gdGVtYSBleGNsdXNpdm8gZSBkZXNlbnZvbHZpbWVudG8gY29tcGxldG8gQmFjay1FbmQuIEludGVncmHDp8OjbyB0b3RhbCBjb20gbyBQYXlQYWwgZSBlbnZpbyBlbSBtYXNzYSBkZSBjb21pc3PDtWVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlIHdhdmVzLWVmZmVjdCB3YXZlcy1ibG9jayB3YXZlcy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjdGl2YXRvclwiICBzcmM9e3JlcXVpcmUoJy4vYXNzZXRzL0dMMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWN0aXZhdG9yIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+R0FNRVNMTDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+bW9yZV92ZXJ0PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwianVzdGlmeVwifX0+QSBsb2phIEdhbWVzTEwgb2ZlcmVjZSBqb2dvcyBlbSBkaXZlcnNhcyBtw61kaWFzLCBjb25zb2xlcyBlIGFjZXNzw7NyaW9zIHBhcmEgZ2FtZXJzIGUgZW50dXNpYXN0YXMuIENvbSBsYW7Dp2FtZW50b3MgZSBwcmXDp29zIGJhaXhvcywgYSBsb2phIHByb21ldGUgc2VyIHVtIHN1Y2Vzc28hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHVycGxlLXRleHRcIiBocmVmPVwiaHR0cHM6Ly9nYW1lc2xsLmNvbS5ici9cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmxpbms8L2k+IFZlciBzaXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1yZXZlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBncmV5LXRleHQgdGV4dC1kYXJrZW4tNFwiPlNlcnZpw6dvcyBwcmVzdGFkb3M8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmNsb3NlPC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwianVzdGlmeVwifX0+Q29uc3RydcOnw6NvIGRlIHNpdGUgY29tIHRlbWEgZXhjbHVzaXZvIGUgZUNvbW1lcmNlIGNvbSBpbnRlZ3Jhw6fDo28gY29tIGdhdGV3YXlzIGRlIHBhZ2FtZW50by48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaXplLXNjcmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2l6ZS1zY3JlZW4tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlYWxseS1iaWctaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZWFsbHktYmlnLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8U2FmZS5zY3JpcHQ+e2BcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VzID0gTS5QYXJhbGxheC5pbml0KGVsZW1zLCB7fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGB9PC9TYWZlLnNjcmlwdD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L0xheW91dD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Home.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_safe__WEBPACK_IMPORTED_MODULE_3___default.a.script, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\n                document.addEventListener('DOMContentLoaded', function() {\n                    const elems = document.querySelectorAll('.parallax')\n                    const instances = M.Parallax.init(elems, {})\n                })\n            ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Roberto Souza"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: __webpack_require__(/*! ./assets/favico.ico */ "./components/assets/favico.ico"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: __webpack_require__(/*! ./assets/apple-touch-icon.png */ "./components/assets/apple-touch-icon.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-120240872-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-safe */ "react-safe");
/* harmony import */ var react_safe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_safe__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Navbar.js";




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3120211836" + " " + "navbar-fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3120211836" + " " + "purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3120211836" + " " + "nav-wrapper container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Logo",
    src: __webpack_require__(/*! ./assets/logo.svg */ "./components/assets/logo.svg"),
    className: "jsx-3120211836" + " " + "logo-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    "data-target": "nav-mobile",
    className: "jsx-3120211836" + " " + "right sidenav-trigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3120211836" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "menu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3120211836" + " " + "right hide-on-med-and-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Sobre",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Sobre")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Skills",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Projetos",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Projetos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Contato",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Contato")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    id: "nav-mobile",
    className: "jsx-3120211836" + " " + "sidenav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#!",
    className: "jsx-3120211836" + " " + "sidenav-close right btn purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "X")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Sobre",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Sobre")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Skills",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Projetos",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Projetos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#Contato",
    className: "jsx-3120211836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contato"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3120211836",
    __self: this
  }, "@media screen and (min-width:992px){.logo-img.jsx-3120211836{height:60px;padding:4px 0!important;}}@media screen and (max-width:992px){.logo-img.jsx-3120211836{height:55px;padding:5px 0!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm9iZXJ0b1xcRG9jdW1lbnRzXFxUcmFiYWxob1xcUm9iZXJ0b1NvdXphRGV2XFxyb2JlcnRvc291emEuZGV2XFxmcm9udGVuZFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFJaUMsQUFPQSxZQU5ZLEFBT0Esd0JBTjVCLEFBT0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxSb2JlcnRvXFxEb2N1bWVudHNcXFRyYWJhbGhvXFxSb2JlcnRvU291emFEZXZcXHJvYmVydG9zb3V6YS5kZXZcXGZyb250ZW5kXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2FmZSBmcm9tIFwicmVhY3Qtc2FmZVwiXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWZpeGVkXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIGFsdD1cIkxvZ29cIiBzcmM9e3JlcXVpcmUoJy4vYXNzZXRzL2xvZ28uc3ZnJyl9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10YXJnZXQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgc2lkZW5hdi10cmlnZ2VyXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjU29icmVcIj5Tb2JyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNTa2lsbHNcIj5Ta2lsbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjUHJvamV0b3NcIj5Qcm9qZXRvczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNDb250YXRvXCI+Q29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGVuYXZcIiBpZD1cIm5hdi1tb2JpbGVcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cInNpZGVuYXYtY2xvc2UgcmlnaHQgYnRuIHB1cnBsZVwiIGhyZWY9XCIjIVwiPlg8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjU29icmVcIj5Tb2JyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNTa2lsbHNcIj5Ta2lsbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjUHJvamV0b3NcIj5Qcm9qZXRvczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNDb250YXRvXCI+Q29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPFNhZmUuc2NyaXB0PntgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVuYXYnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VzID0gTS5TaWRlbmF2LmluaXQoZWxlbXMsIHsgcHJldmVudFNjcm9sbGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBgfTwvU2FmZS5zY3JpcHQ+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl19 */\n/*@ sourceURL=C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\components\\Navbar.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_safe__WEBPACK_IMPORTED_MODULE_2___default.a.script, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\n            document.addEventListener('DOMContentLoaded', function() {\n                const elems = document.querySelectorAll('.sidenav')\n                const instances = M.Sidenav.init(elems, { preventScrolling: false })\n            })\n        "));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/assets/FD1.png":
/*!***********************************!*\
  !*** ./components/assets/FD1.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/FD1-9f590d6b30da1b7c71097e43ad6692f3.png";

/***/ }),

/***/ "./components/assets/GL1.png":
/*!***********************************!*\
  !*** ./components/assets/GL1.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/GL1-fa808205b1cca7f2bc65b1d2f8c6c97e.png";

/***/ }),

/***/ "./components/assets/TM1.png":
/*!***********************************!*\
  !*** ./components/assets/TM1.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/TM1-bd83ef6036b9af9c3fda18fc0f0b6232.png";

/***/ }),

/***/ "./components/assets/apple-touch-icon.png":
/*!************************************************!*\
  !*** ./components/assets/apple-touch-icon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/assets/background.jpg":
/*!******************************************!*\
  !*** ./components/assets/background.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/background-efe24c6c1aca861e1055297b2b32aaf5.jpg";

/***/ }),

/***/ "./components/assets/favico.ico":
/*!**************************************!*\
  !*** ./components/assets/favico.ico ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/vnd.microsoft.icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbqwAAm6wAQ5qqAO6aqgD/mqoA/5yuAP+kvQD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pL0A/5yuAP+aqgD/mqoA/5qqAO2bqwBCmqsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJqrAACbqwBbmqoA/pqqAP+aqgD/nK4A/6S9AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+kvQD/nK4A/5qqAP+aqgD/mqoA/ZurAFqaqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm6sAAJusAD2aqgDzmqoA/5qqAP+dsAD/pb0A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W+AP+lvgD/pb4A/6W9AP+dsAD/mqoA/5qqAP+aqgDzm6wAO5urAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbrQAAm60AIZqqAOGaqgD/mqsA/6G3AP+lvgD/pb4A/6W+AP+lvgD/o7oA/5+0AP+esQD/nrEA/5+0AP+jugD/pb4A/6W+AP+lvgD/pb4A/6G3AP+aqwD/mqoA/5qqAOGbrAAhm6wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJyvAACdrwAMmqsAv5qqAP+esgD/pb4A/6W+AP+lvgD/pL0A/5+zAP+crxT/oLZS/6O9gv+jvYL/oLZS/5yvFP+fswD/pL0A/6W+AP+lvgD/pb4A/56yAP+aqgD/mqsAvpyvAAucrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAobcAAJelAACbrQBona8A+aS8AP+lvgD/pb4A/6W+AP+fswD/nrIz/6fFuf+rzfH/q875/6vO+f+rzfH/p8W4/56xMv+fswD/pb4A/6W+AP+lvgD/pLwA/52vAPmbrQBlmKcAAKG2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnbEAAJyuAAuiuQCGpb4A7aW+AP+lvgD/orgA/52vHf+oxsP/rM76/6vN9v+rzfX/q831/6vN9f+rzvn/qMbB/52vHP+iuAD/pb4A/6W+AP+lvgDtorkAhJutAAudsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApb4AAKW/AAalvgA2pb4AdaW+ALGesQDkoLlw/KXI8v+ixe//pMfw/6nL8/+rzfX/q831/6vN9f+rzfb/orpw/J6xAOOlvgCwpb4Ac6W+ADalvgAGpb4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKO+AACjugAApL0AB5yuACecu6lelLnjq5G24/mRt+T/lbrm/6DE7v+qzPX/q830+KvN76emw6lbnK0AJqS9AAaiugAApbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJW61gCVutMUkbbgzY+24/+QtuP/kbfj/5zB7P+py+vKqsvIEqrKzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq//8AoMPaAKLE3RGZveTIn8Lt/6rL8/+szPT/pcfw/6bI6MO00s8PsM7KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC01foAqcv0AK7P9hOszvZZq831r6/Q9/W62P3/v9v//7/c//++2///vNn99L7b/qm+2/9Svtv/EL7b/wC82/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr9D3AKPI8gCszvY7rM31wKvN9fqx0fj/vNr+/7/b//+92v7/vdr+/77b//+/2///vtv//77b//i+2/+6vtv/Nr/b/wC92v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALTU+gCszfUArc72M6vN9dmrzfX/sNH4/7za/v+11Pn/pMbv/57B6/+ewev/pMbv/7XT+f++2///vtv//77b//++2//Uvtv/Lb7b/wC+3P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArs/3AK/Q+AeszvWmq831/6zO9v+52P3/vtv//6fJ8f+ixO7/rMz0/6zM9P+ixO7/p8nx/77b//++2///vtv//77b//++2/+gvtv/Bb7b/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/P9wDC3P8Arc72PavN9emrzfX/sdH4/77b//++2///vdr+/77b//+/3P//v9z//77b//+92v7/vtv//77b//++2///vtv//77b/+W+2/83v+b/AL7a/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArM72AK3O9j2rzfXdq831/6vN9f+01Pr/udX4/7rX+v++2///vtv//77b//++2///vtv//77b//+61/r/uNX4/77b//++2///vtv//r7b/9i+2/83vtv/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACszvYArc/2a6vO9v+rzfX/q831/67M8f9nd5T/fZGv/77b//++2///vtv//77b//++2///vtv//32Rr/9md5T/t9P2/77c//++2///v9z//7/c/mPA3f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDA5QCkxOpUpcbt+qrM9P+rzvb/qsjt/1BdeP9qe5j/vdr+/77b//++2///vtv//77b//+92v7/anuY/1BdeP+zz/L/v9z//77b//+xzO7/gpava5y00gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGR4kABUZHUouN0H3hZ++/63P+P+00/n/pb7g/63H6v++3P//vtv//77b//++2///vtv//77c//+sx+r/pb7g/73a/v++2///udX4/0tWZP8ICQp9Gx8kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgwAAAP9me5P/rtD5/7XU+v/A3f//v9z//7/d///B3///wN3//7/c//+/3P//vtv//7/c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"

/***/ }),

/***/ "./components/assets/logo.svg":
/*!************************************!*\
  !*** ./components/assets/logo.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-ea0741fc0ddf81e54f319c5ff5177829.svg";

/***/ }),

/***/ "./components/assets/roberto.jpg":
/*!***************************************!*\
  !*** ./components/assets/roberto.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/roberto-c2880df9d8fe104b39bc1398682365cb.jpg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");


var _jsxFileName = "C:\\Users\\Roberto\\Documents\\Trabalho\\RobertoSouzaDev\\robertosouza.dev\\frontend\\pages\\index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roberto\Documents\Trabalho\RobertoSouzaDev\robertosouza.dev\frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-materialize":
/*!************************************!*\
  !*** external "react-materialize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),

/***/ "react-safe":
/*!*****************************!*\
  !*** external "react-safe" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-safe");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map