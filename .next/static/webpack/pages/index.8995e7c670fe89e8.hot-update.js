"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_CryptoZombieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/CryptoZombieContext */ \"./context/CryptoZombieContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [zombieName, setZombieName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const displayZombies = async (id)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"zombie\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Name: \"\n                }, void 0, false, {\n                    fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    };\n    const { getZombiedetails , createRandomZombie , generateZombie , getZombiesByOwner , zombies , ids  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_CryptoZombieContext__WEBPACK_IMPORTED_MODULE_4__.CryptoZombieContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: ids.map((id, index)=>{})\n                }, void 0, false, {\n                    fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"set zombie name\",\n                            value: zombieName,\n                            onChange: (e)=>setZombieName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>createRandomZombie(zombieName),\n                            children: \"Create Random Zombie\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>getZombiesByOwner(),\n                    children: \"Get Zombie ids\"\n                }, void 0, false, {\n                    fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"St8W+UH+0VYSx4ibhy0zwzx7SeU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFSc0I7QUFDRTtBQUVlO0FBQ1g7QUFDRjtBQUNtQztBQUlwRCxTQUFTTyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUssaUJBQWlCLE9BQU1DLEtBQU87UUFDbEMscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDOzBCQUNDLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7OztJQUlaO0lBRUEsTUFBTSxFQUFDQyxpQkFBZ0IsRUFBRUMsbUJBQWtCLEVBQUVDLGVBQWMsRUFBRUMsa0JBQWlCLEVBQzVFQyxRQUFPLEVBQUVDLElBQUcsRUFBQyxHQUFHakIsaURBQVVBLENBQUNFLDZFQUFtQkE7SUFFaEQscUJBQ0U7a0JBQ0EsNEVBQUNnQjs7OEJBQ0MsOERBQUNWOzhCQUNBUyxJQUFJRSxHQUFHLENBQUMsQ0FBQ1osSUFBSWEsUUFBVSxDQUV4Qjs7Ozs7OzhCQUVBLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNDO29CQUFLQyxRQUFPOztzQ0FDYiw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQWtCQyxPQUFPdkI7NEJBQVl3QixVQUFVLENBQUNDLElBQUl4QixjQUFjd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBQzdHLDhEQUFDSTs0QkFBT0MsU0FBUyxJQUFNbkIsbUJBQW1CVDtzQ0FBYTs7Ozs7Ozs7Ozs7OzhCQUV6RCw4REFBQzJCO29CQUFPQyxTQUFTLElBQU1qQjs4QkFBcUI7Ozs7Ozs7Ozs7Ozs7QUFJbEQsQ0FBQztHQWpDdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3J5cHRvWm9tYmllQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9DcnlwdG9ab21iaWVDb250ZXh0J1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt6b21iaWVOYW1lLCBzZXRab21iaWVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGRpc3BsYXlab21iaWVzID0gYXN5bmMoaWQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6b21iaWVcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5OYW1lOiA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3Qge2dldFpvbWJpZWRldGFpbHMsIGNyZWF0ZVJhbmRvbVpvbWJpZSwgZ2VuZXJhdGVab21iaWUsIGdldFpvbWJpZXNCeU93bmVyLFxuICAgIHpvbWJpZXMsIGlkc30gPSB1c2VDb250ZXh0KENyeXB0b1pvbWJpZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXY+XG4gICAgICB7aWRzLm1hcCgoaWQsIGluZGV4KSA9PiB7XG5cbiAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZXQgem9tYmllIG5hbWVcIiB2YWx1ZT17em9tYmllTmFtZX0gb25DaGFuZ2U9eyhlKT0+c2V0Wm9tYmllTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlUmFuZG9tWm9tYmllKHpvbWJpZU5hbWUpfT5DcmVhdGUgUmFuZG9tIFpvbWJpZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRab21iaWVzQnlPd25lcigpfT5HZXQgWm9tYmllIGlkczwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ3J5cHRvWm9tYmllQ29udGV4dCIsIkhvbWUiLCJ6b21iaWVOYW1lIiwic2V0Wm9tYmllTmFtZSIsImRpc3BsYXlab21iaWVzIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiZ2V0Wm9tYmllZGV0YWlscyIsImNyZWF0ZVJhbmRvbVpvbWJpZSIsImdlbmVyYXRlWm9tYmllIiwiZ2V0Wm9tYmllc0J5T3duZXIiLCJ6b21iaWVzIiwiaWRzIiwibWFpbiIsIm1hcCIsImluZGV4IiwiaHIiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});