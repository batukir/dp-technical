module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/XMLForm/index.js":
/*!*************************************!*\
  !*** ./components/XMLForm/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XMLForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xmlbuilder2 */ \"xmlbuilder2\");\n/* harmony import */ var xmlbuilder2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"js-file-download\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/fowadsohail/Documents/GitHub/datapassports-technical-challenge/components/XMLForm/index.js\";\n\n\n\nfunction XMLForm() {\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log(e.target.elements);\n    const {\n      firstName,\n      lastName,\n      address,\n      companyName\n    } = e.target.elements;\n    const xmlDoc = Object(xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__[\"create\"])({\n      version: '1.0'\n    }).ele('user').ele('firstName').txt(firstName.value).up().ele('lastName').txt(lastName.value).up().ele('address').txt(address.value).up().ele('companyName').txt(companyName.value).up().up();\n    const xmlFile = xmlDoc.end({\n      prettyPrint: true\n    });\n    js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(xmlFile, 'xml-form.xml');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    elevation: 5,\n    style: {\n      marginTop: 60,\n      padding: 30\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/DataPassportsLogo.svg\",\n      style: {\n        marginLeft: 15\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      display: \"flex\",\n      flexDirection: \"column\",\n      style: {\n        margin: 40\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        id: \"xml-form\",\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"firstName\",\n            label: \"First Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"lastName\",\n            label: \"Last Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"address\",\n            label: \"Address\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"companyName\",\n            label: \"Company Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"submit\",\n          form: \"xml-form\",\n          color: \"primary\",\n          variant: \"contained\",\n          style: {\n            marginBottom: 15\n          },\n          children: \"Generate XML\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1hNTEZvcm0vaW5kZXguanM/ZWRjZiJdLCJuYW1lcyI6WyJYTUxGb3JtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImVsZW1lbnRzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhZGRyZXNzIiwiY29tcGFueU5hbWUiLCJ4bWxEb2MiLCJjcmVhdGVYTUxEb2MiLCJ2ZXJzaW9uIiwiZWxlIiwidHh0IiwidmFsdWUiLCJ1cCIsInhtbEZpbGUiLCJlbmQiLCJwcmV0dHlQcmludCIsImZpbGVEb3dubG9hZCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLFFBQU1DLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxRQUFyQjtBQUVBLFVBQU07QUFBRUMsZUFBRjtBQUFhQyxjQUFiO0FBQXVCQyxhQUF2QjtBQUFnQ0M7QUFBaEMsUUFBZ0RULENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxRQUEvRDtBQUNBLFVBQU1LLE1BQU0sR0FBR0MsMERBQVksQ0FBQztBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFELENBQVosQ0FDWkMsR0FEWSxDQUNSLE1BRFEsRUFFWkEsR0FGWSxDQUVSLFdBRlEsRUFHWkMsR0FIWSxDQUdSUixTQUFTLENBQUNTLEtBSEYsRUFJWkMsRUFKWSxHQUtaSCxHQUxZLENBS1IsVUFMUSxFQU1aQyxHQU5ZLENBTVJQLFFBQVEsQ0FBQ1EsS0FORCxFQU9aQyxFQVBZLEdBUVpILEdBUlksQ0FRUixTQVJRLEVBU1pDLEdBVFksQ0FTUk4sT0FBTyxDQUFDTyxLQVRBLEVBVVpDLEVBVlksR0FXWkgsR0FYWSxDQVdSLGFBWFEsRUFZWkMsR0FaWSxDQVlSTCxXQUFXLENBQUNNLEtBWkosRUFhWkMsRUFiWSxHQWNaQSxFQWRZLEVBQWY7QUFlQSxVQUFNQyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXO0FBQUVDLGlCQUFXLEVBQUU7QUFBZixLQUFYLENBQWhCO0FBQ0FDLDJEQUFZLENBQUNILE9BQUQsRUFBVSxjQUFWLENBQVo7QUFDRCxHQXRCRDs7QUF3QkEsc0JBQ0UscUVBQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBbEI7QUFBcUIsU0FBSyxFQUFFO0FBQUVJLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBNUI7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBQyx3QkFBVDtBQUFrQyxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHFEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQWEsRUFBQyxRQUFsQztBQUEyQyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVYsT0FBbEQ7QUFBQSw4QkFDRTtBQUFNLFVBQUUsRUFBQyxVQUFUO0FBQW9CLGdCQUFRLEVBQUV6QixZQUE5QjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSxjQUFFLEVBQUMsV0FETDtBQUVFLGlCQUFLLEVBQUMsWUFGUjtBQUdFLGlCQUFLLEVBQUU7QUFBRTBCLDBCQUFZLEVBQUU7QUFBaEI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSxjQUFFLEVBQUMsVUFETDtBQUVFLGlCQUFLLEVBQUMsV0FGUjtBQUdFLGlCQUFLLEVBQUU7QUFBRUEsMEJBQVksRUFBRTtBQUFoQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLEVBY1MsR0FkVCxlQWVFO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSxjQUFFLEVBQUMsU0FETDtBQUVFLGlCQUFLLEVBQUMsU0FGUjtBQUdFLGlCQUFLLEVBQUU7QUFBRUEsMEJBQVksRUFBRTtBQUFoQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLEVBcUJTLEdBckJULGVBc0JFO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSxjQUFFLEVBQUMsYUFETDtBQUVFLGlCQUFLLEVBQUMsY0FGUjtBQUdFLGlCQUFLLEVBQUU7QUFBRUEsMEJBQVksRUFBRTtBQUFoQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQTZCRSxxRUFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxlQUFLLEVBQUMsU0FIUjtBQUlFLGlCQUFPLEVBQUMsV0FKVjtBQUtFLGVBQUssRUFBRTtBQUFFQSx3QkFBWSxFQUFFO0FBQWhCLFdBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBdUNVLEdBdkNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOENEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9YTUxGb3JtL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpZWxkLCBQYXBlciwgQm94LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGUgYXMgY3JlYXRlWE1MRG9jIH0gZnJvbSAneG1sYnVpbGRlcjInO1xuaW1wb3J0IGZpbGVEb3dubG9hZCBmcm9tICdqcy1maWxlLWRvd25sb2FkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWE1MRm9ybSgpIHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZWxlbWVudHMpO1xuXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhZGRyZXNzLCBjb21wYW55TmFtZSB9ID0gZS50YXJnZXQuZWxlbWVudHM7XG4gICAgY29uc3QgeG1sRG9jID0gY3JlYXRlWE1MRG9jKHsgdmVyc2lvbjogJzEuMCcgfSlcbiAgICAgIC5lbGUoJ3VzZXInKVxuICAgICAgLmVsZSgnZmlyc3ROYW1lJylcbiAgICAgIC50eHQoZmlyc3ROYW1lLnZhbHVlKVxuICAgICAgLnVwKClcbiAgICAgIC5lbGUoJ2xhc3ROYW1lJylcbiAgICAgIC50eHQobGFzdE5hbWUudmFsdWUpXG4gICAgICAudXAoKVxuICAgICAgLmVsZSgnYWRkcmVzcycpXG4gICAgICAudHh0KGFkZHJlc3MudmFsdWUpXG4gICAgICAudXAoKVxuICAgICAgLmVsZSgnY29tcGFueU5hbWUnKVxuICAgICAgLnR4dChjb21wYW55TmFtZS52YWx1ZSlcbiAgICAgIC51cCgpXG4gICAgICAudXAoKTtcbiAgICBjb25zdCB4bWxGaWxlID0geG1sRG9jLmVuZCh7IHByZXR0eVByaW50OiB0cnVlIH0pO1xuICAgIGZpbGVEb3dubG9hZCh4bWxGaWxlLCAneG1sLWZvcm0ueG1sJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgZWxldmF0aW9uPXs1fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDYwLCBwYWRkaW5nOiAzMCB9fT5cbiAgICAgIDxpbWcgc3JjPScvRGF0YVBhc3Nwb3J0c0xvZ28uc3ZnJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxNSB9fSAvPlxuICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIHN0eWxlPXt7IG1hcmdpbjogNDAgfX0+XG4gICAgICAgIDxmb3JtIGlkPSd4bWwtZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J2ZpcnN0TmFtZSdcbiAgICAgICAgICAgICAgbGFiZWw9J0ZpcnN0IE5hbWUnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J2xhc3ROYW1lJ1xuICAgICAgICAgICAgICBsYWJlbD0nTGFzdCBOYW1lJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J2FkZHJlc3MnXG4gICAgICAgICAgICAgIGxhYmVsPSdBZGRyZXNzJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J2NvbXBhbnlOYW1lJ1xuICAgICAgICAgICAgICBsYWJlbD0nQ29tcGFueSBOYW1lJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGZvcm09J3htbC1mb3JtJ1xuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2VuZXJhdGUgWE1MXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT57JyAnfVxuICAgICAgPC9Cb3g+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/XMLForm/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"@material-ui/icons/ExpandMore\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_XMLForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/XMLForm */ \"./components/XMLForm/index.js\");\n\nvar _jsxFileName = \"/Users/fowadsohail/Documents/GitHub/datapassports-technical-challenge/pages/index.js\";\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    style: {\n      minHeight: '100vh',\n      padding: '0 0.5rem',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"DataPassports Technical Challenge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        color: '#0070f3',\n        textDecoration: 'none'\n      },\n      children: [\"DataPassports Technical Challenge\", ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Fowad Sohail\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"], {\n      style: {\n        width: 600\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AccordionSummary\"], {\n        expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 39\n        }, this),\n        children: [\"Task\", ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AccordionDetails\"], {\n        children: \"Please make a basic React app that has 4-5 form fields that the user can fill in. From that, an XML file should be generated. Also, setup a basic unit test for your code (via Jest or anything else that you think makes sense). Notes: this does NOT have to be a very complicated endeavor. A simple single page with a few text fields is fine. You should put it up on GitHub and send me the link.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_XMLForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLE9BRE47QUFFTEMsYUFBTyxFQUFFLFVBRko7QUFHTEMsYUFBTyxFQUFFLE1BSEo7QUFJTEMsbUJBQWEsRUFBRSxRQUpWO0FBS0xDLG9CQUFjLEVBQUUsUUFMWDtBQU1MQyxnQkFBVSxFQUFFO0FBTlAsS0FEVDtBQUFBLDRCQVVFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWVFO0FBQUksV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxzQkFBYyxFQUFFO0FBQXBDLE9BQVg7QUFBQSxzREFDb0MsR0FEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUFtQkUscUVBQUMsMkRBQUQ7QUFBVyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBbEI7QUFBQSw4QkFDRSxxRUFBQyxrRUFBRDtBQUFrQixrQkFBVSxlQUFFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTlCO0FBQUEsMkJBQ08sR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLGVBZ0NFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkRldGFpbHMsXG4gIEFjY29yZGlvblN1bW1hcnksXG4gIEJveCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBYTUxGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvWE1MRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBwYWRkaW5nOiAnMCAwLjVyZW0nLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRhdGFQYXNzcG9ydHMgVGVjaG5pY2FsIENoYWxsZW5nZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICcjMDA3MGYzJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgRGF0YVBhc3Nwb3J0cyBUZWNobmljYWwgQ2hhbGxlbmdleycgJ31cbiAgICAgIDwvaDE+XG4gICAgICA8aDI+Rm93YWQgU29oYWlsPC9oMj5cbiAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6IDYwMCB9fT5cbiAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cbiAgICAgICAgICBUYXNreycgJ31cbiAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICBQbGVhc2UgbWFrZSBhIGJhc2ljIFJlYWN0IGFwcCB0aGF0IGhhcyA0LTUgZm9ybSBmaWVsZHMgdGhhdCB0aGUgdXNlclxuICAgICAgICAgIGNhbiBmaWxsIGluLiBGcm9tIHRoYXQsIGFuIFhNTCBmaWxlIHNob3VsZCBiZSBnZW5lcmF0ZWQuIEFsc28sIHNldHVwIGFcbiAgICAgICAgICBiYXNpYyB1bml0IHRlc3QgZm9yIHlvdXIgY29kZSAodmlhIEplc3Qgb3IgYW55dGhpbmcgZWxzZSB0aGF0IHlvdVxuICAgICAgICAgIHRoaW5rIG1ha2VzIHNlbnNlKS4gTm90ZXM6IHRoaXMgZG9lcyBOT1QgaGF2ZSB0byBiZSBhIHZlcnkgY29tcGxpY2F0ZWRcbiAgICAgICAgICBlbmRlYXZvci4gQSBzaW1wbGUgc2luZ2xlIHBhZ2Ugd2l0aCBhIGZldyB0ZXh0IGZpZWxkcyBpcyBmaW5lLiBZb3VcbiAgICAgICAgICBzaG91bGQgcHV0IGl0IHVwIG9uIEdpdEh1YiBhbmQgc2VuZCBtZSB0aGUgbGluay5cbiAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8WE1MRm9ybSAvPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ExpandMore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiPzA3ZDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/ExpandMore\n");

/***/ }),

/***/ "js-file-download":
/*!***********************************!*\
  !*** external "js-file-download" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-file-download\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1maWxlLWRvd25sb2FkXCI/NTcwOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqcy1maWxlLWRvd25sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtZmlsZS1kb3dubG9hZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-file-download\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "xmlbuilder2":
/*!******************************!*\
  !*** external "xmlbuilder2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xmlbuilder2\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ4bWxidWlsZGVyMlwiPzMzMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoieG1sYnVpbGRlcjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ4bWxidWlsZGVyMlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///xmlbuilder2\n");

/***/ })

/******/ });