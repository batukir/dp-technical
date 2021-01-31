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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/XMLForm/index.tsx":
/*!**************************************!*\
  !*** ./components/XMLForm/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XMLForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xmlbuilder2 */ \"xmlbuilder2\");\n/* harmony import */ var xmlbuilder2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"js-file-download\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/fowadsohail/Documents/GitHub/datapassports-technical-challenge/components/XMLForm/index.tsx\";\n\n\n\nfunction XMLForm() {\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log(e.target.elements);\n    const {\n      firstName,\n      lastName,\n      address,\n      companyName\n    } = e.target.elements;\n    const xmlDoc = Object(xmlbuilder2__WEBPACK_IMPORTED_MODULE_2__[\"create\"])({\n      version: '1.0'\n    }).ele('user').ele('firstName').txt(firstName.value).up().ele('lastName').txt(lastName.value).up().ele('address').txt(address.value).up().ele('companyName').txt(companyName.value).up().up();\n    const xmlFile = xmlDoc.end({\n      prettyPrint: true\n    });\n    js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(xmlFile, 'xml-form.xml');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    elevation: 5,\n    style: {\n      marginTop: 60,\n      padding: 30\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/DataPassportsLogo.svg\",\n      style: {\n        marginLeft: 15\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      display: \"flex\",\n      flexDirection: \"column\",\n      style: {\n        margin: 40\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        id: \"xml-form\",\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"firstName\",\n            \"data-testid\": \"required-firstName\",\n            required: true,\n            label: \"First Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"lastName\",\n            \"data-testid\": \"required-lastName\",\n            required: true,\n            label: \"Last Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"address\",\n            \"data-testid\": \"required-address\",\n            required: true,\n            label: \"Address\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n            id: \"companyName\",\n            \"data-testid\": \"required-companyName\",\n            required: true,\n            label: \"Company Name\",\n            style: {\n              marginBottom: 15\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"submit\",\n          form: \"xml-form\",\n          color: \"primary\",\n          variant: \"contained\",\n          style: {\n            marginBottom: 15\n          },\n          children: \"Generate XML\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1hNTEZvcm0vaW5kZXgudHN4PzE0MmQiXSwibmFtZXMiOlsiWE1MRm9ybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJlbGVtZW50cyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNvbXBhbnlOYW1lIiwieG1sRG9jIiwiY3JlYXRlWE1MRG9jIiwidmVyc2lvbiIsImVsZSIsInR4dCIsInZhbHVlIiwidXAiLCJ4bWxGaWxlIiwiZW5kIiwicHJldHR5UHJpbnQiLCJmaWxlRG93bmxvYWQiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsUUFBckI7QUFFQSxVQUFNO0FBQUVDLGVBQUY7QUFBYUMsY0FBYjtBQUF1QkMsYUFBdkI7QUFBZ0NDO0FBQWhDLFFBQWdEVCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsUUFBL0Q7QUFDQSxVQUFNSyxNQUFNLEdBQUdDLDBEQUFZLENBQUM7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBRCxDQUFaLENBQ1pDLEdBRFksQ0FDUixNQURRLEVBRVpBLEdBRlksQ0FFUixXQUZRLEVBR1pDLEdBSFksQ0FHUlIsU0FBUyxDQUFDUyxLQUhGLEVBSVpDLEVBSlksR0FLWkgsR0FMWSxDQUtSLFVBTFEsRUFNWkMsR0FOWSxDQU1SUCxRQUFRLENBQUNRLEtBTkQsRUFPWkMsRUFQWSxHQVFaSCxHQVJZLENBUVIsU0FSUSxFQVNaQyxHQVRZLENBU1JOLE9BQU8sQ0FBQ08sS0FUQSxFQVVaQyxFQVZZLEdBV1pILEdBWFksQ0FXUixhQVhRLEVBWVpDLEdBWlksQ0FZUkwsV0FBVyxDQUFDTSxLQVpKLEVBYVpDLEVBYlksR0FjWkEsRUFkWSxFQUFmO0FBZUEsVUFBTUMsT0FBTyxHQUFHUCxNQUFNLENBQUNRLEdBQVAsQ0FBVztBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBWCxDQUFoQjtBQUNBQywyREFBWSxDQUFDSCxPQUFELEVBQVUsY0FBVixDQUFaO0FBQ0QsR0F0QkQ7O0FBd0JBLHNCQUNFLHFFQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFLENBQWxCO0FBQXFCLFNBQUssRUFBRTtBQUFFSSxlQUFTLEVBQUUsRUFBYjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQTVCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUMsd0JBQVQ7QUFBa0MsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxxREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG1CQUFhLEVBQUMsUUFBbEM7QUFBMkMsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BQWxEO0FBQUEsOEJBQ0U7QUFBTSxVQUFFLEVBQUMsVUFBVDtBQUFvQixnQkFBUSxFQUFFekIsWUFBOUI7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsY0FBRSxFQUFDLFdBREw7QUFFRSwyQkFBWSxvQkFGZDtBQUdFLG9CQUFRLE1BSFY7QUFJRSxpQkFBSyxFQUFDLFlBSlI7QUFLRSxpQkFBSyxFQUFFO0FBQUUwQiwwQkFBWSxFQUFFO0FBQWhCO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRTtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsY0FBRSxFQUFDLFVBREw7QUFFRSwyQkFBWSxtQkFGZDtBQUdFLG9CQUFRLE1BSFY7QUFJRSxpQkFBSyxFQUFDLFdBSlI7QUFLRSxpQkFBSyxFQUFFO0FBQUVBLDBCQUFZLEVBQUU7QUFBaEI7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixFQWtCUyxHQWxCVCxlQW1CRTtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsY0FBRSxFQUFDLFNBREw7QUFFRSwyQkFBWSxrQkFGZDtBQUdFLG9CQUFRLE1BSFY7QUFJRSxpQkFBSyxFQUFDLFNBSlI7QUFLRSxpQkFBSyxFQUFFO0FBQUVBLDBCQUFZLEVBQUU7QUFBaEI7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkYsRUEyQlMsR0EzQlQsZUE0QkU7QUFBQSxpQ0FDRSxxRUFBQywyREFBRDtBQUNFLGNBQUUsRUFBQyxhQURMO0FBRUUsMkJBQVksc0JBRmQ7QUFHRSxvQkFBUSxNQUhWO0FBSUUsaUJBQUssRUFBQyxjQUpSO0FBS0UsaUJBQUssRUFBRTtBQUFFQSwwQkFBWSxFQUFFO0FBQWhCO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGLGVBcUNFLHFFQUFDLHdEQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGVBQUssRUFBQyxTQUhSO0FBSUUsaUJBQU8sRUFBQyxXQUpWO0FBS0UsZUFBSyxFQUFFO0FBQUVBLHdCQUFZLEVBQUU7QUFBaEIsV0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUErQ1UsR0EvQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1hNTEZvcm0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGV4dEZpZWxkLFxuICBQYXBlcixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBJbnB1dExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlIGFzIGNyZWF0ZVhNTERvYyB9IGZyb20gJ3htbGJ1aWxkZXIyJztcbmltcG9ydCBmaWxlRG93bmxvYWQgZnJvbSAnanMtZmlsZS1kb3dubG9hZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFhNTEZvcm0oKSB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmVsZW1lbnRzKTtcblxuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYWRkcmVzcywgY29tcGFueU5hbWUgfSA9IGUudGFyZ2V0LmVsZW1lbnRzO1xuICAgIGNvbnN0IHhtbERvYyA9IGNyZWF0ZVhNTERvYyh7IHZlcnNpb246ICcxLjAnIH0pXG4gICAgICAuZWxlKCd1c2VyJylcbiAgICAgIC5lbGUoJ2ZpcnN0TmFtZScpXG4gICAgICAudHh0KGZpcnN0TmFtZS52YWx1ZSlcbiAgICAgIC51cCgpXG4gICAgICAuZWxlKCdsYXN0TmFtZScpXG4gICAgICAudHh0KGxhc3ROYW1lLnZhbHVlKVxuICAgICAgLnVwKClcbiAgICAgIC5lbGUoJ2FkZHJlc3MnKVxuICAgICAgLnR4dChhZGRyZXNzLnZhbHVlKVxuICAgICAgLnVwKClcbiAgICAgIC5lbGUoJ2NvbXBhbnlOYW1lJylcbiAgICAgIC50eHQoY29tcGFueU5hbWUudmFsdWUpXG4gICAgICAudXAoKVxuICAgICAgLnVwKCk7XG4gICAgY29uc3QgeG1sRmlsZSA9IHhtbERvYy5lbmQoeyBwcmV0dHlQcmludDogdHJ1ZSB9KTtcbiAgICBmaWxlRG93bmxvYWQoeG1sRmlsZSwgJ3htbC1mb3JtLnhtbCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGVsZXZhdGlvbj17NX0gc3R5bGU9e3sgbWFyZ2luVG9wOiA2MCwgcGFkZGluZzogMzAgfX0+XG4gICAgICA8aW1nIHNyYz0nL0RhdGFQYXNzcG9ydHNMb2dvLnN2Zycgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTUgfX0gLz5cbiAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleERpcmVjdGlvbj0nY29sdW1uJyBzdHlsZT17eyBtYXJnaW46IDQwIH19PlxuICAgICAgICA8Zm9ybSBpZD0neG1sLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPSdmaXJzdE5hbWUnXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPSdyZXF1aXJlZC1maXJzdE5hbWUnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGxhYmVsPSdGaXJzdCBOYW1lJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPSdsYXN0TmFtZSdcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J3JlcXVpcmVkLWxhc3ROYW1lJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD0nTGFzdCBOYW1lJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J2FkZHJlc3MnXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPSdyZXF1aXJlZC1hZGRyZXNzJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD0nQWRkcmVzcydcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj57JyAnfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPSdjb21wYW55TmFtZSdcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J3JlcXVpcmVkLWNvbXBhbnlOYW1lJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD0nQ29tcGFueSBOYW1lJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGZvcm09J3htbC1mb3JtJ1xuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2VuZXJhdGUgWE1MXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT57JyAnfVxuICAgICAgPC9Cb3g+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/XMLForm/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"@material-ui/icons/ExpandMore\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_XMLForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/XMLForm */ \"./components/XMLForm/index.tsx\");\n\nvar _jsxFileName = \"/Users/fowadsohail/Documents/GitHub/datapassports-technical-challenge/pages/index.tsx\";\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    style: {\n      minHeight: '100vh',\n      padding: '0 0.5rem',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"DataPassports Technical Challenge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        color: '#0070f3',\n        textDecoration: 'none'\n      },\n      children: [\"DataPassports Technical Challenge\", ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Fowad Sohail\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"], {\n      style: {\n        width: 600\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AccordionSummary\"], {\n        expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 39\n        }, this),\n        children: [\"Task\", ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AccordionDetails\"], {\n        children: \"Please make a basic React app that has 4-5 form fields that the user can fill in. From that, an XML file should be generated. Also, setup a basic unit test for your code (via Jest or anything else that you think makes sense). Notes: this does NOT have to be a very complicated endeavor. A simple single page with a few text fields is fine. You should put it up on GitHub and send me the link.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_XMLForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxPQUROO0FBRUxDLGFBQU8sRUFBRSxVQUZKO0FBR0xDLGFBQU8sRUFBRSxNQUhKO0FBSUxDLG1CQUFhLEVBQUUsUUFKVjtBQUtMQyxvQkFBYyxFQUFFLFFBTFg7QUFNTEMsZ0JBQVUsRUFBRTtBQU5QLEtBRFQ7QUFBQSw0QkFVRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFlRTtBQUFJLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsU0FBVDtBQUFvQkMsc0JBQWMsRUFBRTtBQUFwQyxPQUFYO0FBQUEsc0RBQ29DLEdBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLGVBbUJFLHFFQUFDLDJEQUFEO0FBQVcsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQWxCO0FBQUEsOEJBQ0UscUVBQUMsa0VBQUQ7QUFBa0Isa0JBQVUsZUFBRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUE5QjtBQUFBLDJCQUNPLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixlQWdDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uRGV0YWlscyxcbiAgQWNjb3JkaW9uU3VtbWFyeSxcbiAgQm94LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IFhNTEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9YTUxGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZT17e1xuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAuNXJlbScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGF0YVBhc3Nwb3J0cyBUZWNobmljYWwgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMwMDcwZjMnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICBEYXRhUGFzc3BvcnRzIFRlY2huaWNhbCBDaGFsbGVuZ2V7JyAnfVxuICAgICAgPC9oMT5cbiAgICAgIDxoMj5Gb3dhZCBTb2hhaWw8L2gyPlxuICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogNjAwIH19PlxuICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59PlxuICAgICAgICAgIFRhc2t7JyAnfVxuICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIFBsZWFzZSBtYWtlIGEgYmFzaWMgUmVhY3QgYXBwIHRoYXQgaGFzIDQtNSBmb3JtIGZpZWxkcyB0aGF0IHRoZSB1c2VyXG4gICAgICAgICAgY2FuIGZpbGwgaW4uIEZyb20gdGhhdCwgYW4gWE1MIGZpbGUgc2hvdWxkIGJlIGdlbmVyYXRlZC4gQWxzbywgc2V0dXAgYVxuICAgICAgICAgIGJhc2ljIHVuaXQgdGVzdCBmb3IgeW91ciBjb2RlICh2aWEgSmVzdCBvciBhbnl0aGluZyBlbHNlIHRoYXQgeW91XG4gICAgICAgICAgdGhpbmsgbWFrZXMgc2Vuc2UpLiBOb3RlczogdGhpcyBkb2VzIE5PVCBoYXZlIHRvIGJlIGEgdmVyeSBjb21wbGljYXRlZFxuICAgICAgICAgIGVuZGVhdm9yLiBBIHNpbXBsZSBzaW5nbGUgcGFnZSB3aXRoIGEgZmV3IHRleHQgZmllbGRzIGlzIGZpbmUuIFlvdVxuICAgICAgICAgIHNob3VsZCBwdXQgaXQgdXAgb24gR2l0SHViIGFuZCBzZW5kIG1lIHRoZSBsaW5rLlxuICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDxYTUxGb3JtIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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