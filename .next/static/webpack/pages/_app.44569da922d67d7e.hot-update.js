"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/CryptoZombieContext.js":
/*!****************************************!*\
  !*** ./context/CryptoZombieContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CryptoZombieContext\": function() { return /* binding */ CryptoZombieContext; },\n/* harmony export */   \"CryptoZombieProvider\": function() { return /* binding */ CryptoZombieProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_apiFeature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/apiFeature */ \"./utils/apiFeature.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CryptoZombieContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CryptoZombieProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [zombies, setZombies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [zombieName, setZombieName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [zombieDna, setZombieDna] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [zombieId, setZombieId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ids, setIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getZombiesByOwner = async ()=>{\n        try {\n            const contract = await (0,_utils_apiFeature__WEBPACK_IMPORTED_MODULE_2__.connectingWithContract)();\n            const account = await (0,_utils_apiFeature__WEBPACK_IMPORTED_MODULE_2__.conectWallet)();\n            setAccount(account);\n            const ids = await contract.getZombiesByOwner(account);\n            setIds(ids);\n        } catch (error) {\n            console.log(error);\n            setError(error);\n        }\n    };\n    const getZombiedetails = async (id)=>{\n        try {\n            const contract = await (0,_utils_apiFeature__WEBPACK_IMPORTED_MODULE_2__.connectingWithContract)();\n            const zombie = await contract.zombies(id);\n            re;\n        } catch (error) {\n            setError(error);\n        }\n    };\n    const createRandomZombie = async (name)=>{\n        try {\n            const contract = await (0,_utils_apiFeature__WEBPACK_IMPORTED_MODULE_2__.connectingWithContract)();\n            const createZombieTx = await contract.createRandomZombie(name);\n            setLoading(true);\n            await createZombieTx.wait();\n            setLoading(false);\n        } catch (error) {\n            console.log(error);\n            setError(error);\n        }\n    };\n    function generateZombie(id, name, dna) {\n        let dnaStr = String(dna);\n        // pad DNA with leading zeroes if it's less than 16 characters\n        while(dnaStr.length < 16)dnaStr = \"0\" + dnaStr;\n        let zombieDetails = {\n            // first 2 digits make up the head. We have 7 possible heads, so % 7\n            // to get a number 0 - 6, then add 1 to make it 1 - 7. Then we have 7\n            // image files named \"head1.png\" through \"head7.png\" we load based on\n            // this number:\n            headChoice: dnaStr.substring(0, 2) % 7 + 1,\n            // 2nd 2 digits make up the eyes, 11 variations:\n            eyeChoice: dnaStr.substring(2, 4) % 11 + 1,\n            // 6 variations of shirts:\n            shirtChoice: dnaStr.substring(4, 6) % 6 + 1,\n            // last 6 digits control color. Updated using CSS filter: hue-rotate\n            // which has 360 degrees:\n            skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),\n            eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),\n            clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),\n            zombieName: name,\n            zombieDescription: \"A Level 1 CryptoZombie\"\n        };\n        return zombieDetails;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getZombiesByOwner();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CryptoZombieContext.Provider, {\n        value: {\n            getZombiedetails,\n            createRandomZombie,\n            generateZombie,\n            getZombiesByOwner,\n            zombies,\n            ids\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/fangzhenfutao/web3/crypto-zombies/context/CryptoZombieContext.js\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CryptoZombieProvider, \"lgUepF693XOgdyP0uu08Ub5dGDg=\");\n_c = CryptoZombieProvider;\nvar _c;\n$RefreshReg$(_c, \"CryptoZombieProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NyeXB0b1pvbWJpZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFDRjtBQUNnRTtBQUUzRixNQUFNTyxvQ0FBc0JMLG9EQUFhQSxHQUFHO0FBRTVDLE1BQU1NLHVCQUF1QixTQUFnQjtRQUFmLEVBQUNDLFNBQVEsRUFBQzs7SUFDM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDcUIsS0FBS0MsT0FBTyxHQUFHdEIsK0NBQVFBLENBQUMsRUFBRTtJQUNqQyxNQUFNLENBQUN1QixPQUFPQyxTQUFTLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUduQyxNQUFNeUIsb0JBQXFCLFVBQVk7UUFDckMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTXJCLHlFQUFzQkE7WUFDN0MsTUFBTWMsVUFBVSxNQUFNZiwrREFBWUE7WUFDbENnQixXQUFXRDtZQUNYLE1BQU1FLE1BQU0sTUFBTUssU0FBU0QsaUJBQWlCLENBQUNOO1lBQzdDRyxPQUFPRDtRQUNULEVBQUUsT0FBT0UsT0FBTztZQUNkSSxRQUFRQyxHQUFHLENBQUNMO1lBQ1pDLFNBQVNEO1FBQ1g7SUFDRjtJQUVBLE1BQU1NLG1CQUFtQixPQUFPQyxLQUFPO1FBQ3JDLElBQUk7WUFDRixNQUFNSixXQUFXLE1BQU1yQix5RUFBc0JBO1lBQzdDLE1BQU0wQixTQUFTLE1BQU1MLFNBQVNqQixPQUFPLENBQUNxQjtZQUN0Q0U7UUFDRixFQUFFLE9BQU9ULE9BQU87WUFDZEMsU0FBU0Q7UUFDWDtJQUNGO0lBRUEsTUFBTVUscUJBQXFCLE9BQU9DLE9BQVM7UUFDekMsSUFBSTtZQUNGLE1BQU1SLFdBQVcsTUFBTXJCLHlFQUFzQkE7WUFDN0MsTUFBTThCLGlCQUFpQixNQUFNVCxTQUFTTyxrQkFBa0IsQ0FBQ0M7WUFDekRoQixXQUFXLElBQUk7WUFDZixNQUFNaUIsZUFBZUMsSUFBSTtZQUN6QmxCLFdBQVcsS0FBSztRQUNsQixFQUFFLE9BQU9LLE9BQU87WUFDWkksUUFBUUMsR0FBRyxDQUFDTDtZQUNaQyxTQUFTRDtRQUNiO0lBQ0Y7SUFFQSxTQUFTYyxlQUFlUCxFQUFFLEVBQUVJLElBQUksRUFBRUksR0FBRyxFQUFFO1FBQ25DLElBQUlDLFNBQVNDLE9BQU9GO1FBQ3BCLDhEQUE4RDtRQUM5RCxNQUFPQyxPQUFPRSxNQUFNLEdBQUcsR0FDckJGLFNBQVMsTUFBTUE7UUFFakIsSUFBSUcsZ0JBQWdCO1lBQ2xCLG9FQUFvRTtZQUNwRSxxRUFBcUU7WUFDckUscUVBQXFFO1lBQ3JFLGVBQWU7WUFDZkMsWUFBWUosT0FBT0ssU0FBUyxDQUFDLEdBQUcsS0FBSyxJQUFJO1lBQ3pDLGdEQUFnRDtZQUNoREMsV0FBV04sT0FBT0ssU0FBUyxDQUFDLEdBQUcsS0FBSyxLQUFLO1lBQ3pDLDBCQUEwQjtZQUMxQkUsYUFBYVAsT0FBT0ssU0FBUyxDQUFDLEdBQUcsS0FBSyxJQUFJO1lBQzFDLG9FQUFvRTtZQUNwRSx5QkFBeUI7WUFDekJHLGlCQUFpQkMsU0FBU1QsT0FBT0ssU0FBUyxDQUFDLEdBQUcsS0FBSyxNQUFNO1lBQ3pESyxnQkFBZ0JELFNBQVNULE9BQU9LLFNBQVMsQ0FBQyxHQUFHLE1BQU0sTUFBTTtZQUN6RE0sb0JBQW9CRixTQUFTVCxPQUFPSyxTQUFTLENBQUMsSUFBSSxNQUFNLE1BQU07WUFDOURqQyxZQUFZdUI7WUFDWmlCLG1CQUFtQjtRQUNyQjtRQUNBLE9BQU9UO0lBQ1Q7SUFFRnhDLGdEQUFTQSxDQUFDLElBQU07UUFDZHVCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNuQixvQkFBb0I4QyxRQUFRO1FBQUNDLE9BQU87WUFBQ3hCO1lBQWtCSTtZQUFvQkk7WUFBZVo7WUFDekZoQjtZQUFTWTtRQUNYO2tCQUNLYjs7Ozs7O0FBSWIsRUFBQztHQXJGWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9DcnlwdG9ab21iaWVDb250ZXh0LmpzPzEwNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tJZldhbGxldENvbm5lY3RlZCwgY29uZWN0V2FsbGV0LCBjb25uZWN0aW5nV2l0aENvbnRyYWN0IH0gZnJvbSBcIkAvdXRpbHMvYXBpRmVhdHVyZVwiO1xuXG5leHBvcnQgY29uc3QgQ3J5cHRvWm9tYmllQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IENyeXB0b1pvbWJpZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbem9tYmllcywgc2V0Wm9tYmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3pvbWJpZU5hbWUsIHNldFpvbWJpZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3pvbWJpZURuYSwgc2V0Wm9tYmllRG5hXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt6b21iaWVJZCwgc2V0Wm9tYmllSWRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpZHMsIHNldElkc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgY29uc3QgZ2V0Wm9tYmllc0J5T3duZXIgPSAgYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aENvbnRyYWN0KClcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGNvbmVjdFdhbGxldCgpXG4gICAgICAgIHNldEFjY291bnQoYWNjb3VudClcbiAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgY29udHJhY3QuZ2V0Wm9tYmllc0J5T3duZXIoYWNjb3VudClcbiAgICAgICAgc2V0SWRzKGlkcylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRab21iaWVkZXRhaWxzID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoQ29udHJhY3QoKVxuICAgICAgICBjb25zdCB6b21iaWUgPSBhd2FpdCBjb250cmFjdC56b21iaWVzKGlkKVxuICAgICAgICByZVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUmFuZG9tWm9tYmllID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhDb250cmFjdCgpXG4gICAgICAgIGNvbnN0IGNyZWF0ZVpvbWJpZVR4ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlUmFuZG9tWm9tYmllKG5hbWUpXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF3YWl0IGNyZWF0ZVpvbWJpZVR4LndhaXQoKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlWm9tYmllKGlkLCBuYW1lLCBkbmEpIHtcbiAgICAgICAgbGV0IGRuYVN0ciA9IFN0cmluZyhkbmEpXG4gICAgICAgIC8vIHBhZCBETkEgd2l0aCBsZWFkaW5nIHplcm9lcyBpZiBpdCdzIGxlc3MgdGhhbiAxNiBjaGFyYWN0ZXJzXG4gICAgICAgIHdoaWxlIChkbmFTdHIubGVuZ3RoIDwgMTYpXG4gICAgICAgICAgZG5hU3RyID0gXCIwXCIgKyBkbmFTdHJcbiAgICAgIFxuICAgICAgICBsZXQgem9tYmllRGV0YWlscyA9IHtcbiAgICAgICAgICAvLyBmaXJzdCAyIGRpZ2l0cyBtYWtlIHVwIHRoZSBoZWFkLiBXZSBoYXZlIDcgcG9zc2libGUgaGVhZHMsIHNvICUgN1xuICAgICAgICAgIC8vIHRvIGdldCBhIG51bWJlciAwIC0gNiwgdGhlbiBhZGQgMSB0byBtYWtlIGl0IDEgLSA3LiBUaGVuIHdlIGhhdmUgN1xuICAgICAgICAgIC8vIGltYWdlIGZpbGVzIG5hbWVkIFwiaGVhZDEucG5nXCIgdGhyb3VnaCBcImhlYWQ3LnBuZ1wiIHdlIGxvYWQgYmFzZWQgb25cbiAgICAgICAgICAvLyB0aGlzIG51bWJlcjpcbiAgICAgICAgICBoZWFkQ2hvaWNlOiBkbmFTdHIuc3Vic3RyaW5nKDAsIDIpICUgNyArIDEsXG4gICAgICAgICAgLy8gMm5kIDIgZGlnaXRzIG1ha2UgdXAgdGhlIGV5ZXMsIDExIHZhcmlhdGlvbnM6XG4gICAgICAgICAgZXllQ2hvaWNlOiBkbmFTdHIuc3Vic3RyaW5nKDIsIDQpICUgMTEgKyAxLFxuICAgICAgICAgIC8vIDYgdmFyaWF0aW9ucyBvZiBzaGlydHM6XG4gICAgICAgICAgc2hpcnRDaG9pY2U6IGRuYVN0ci5zdWJzdHJpbmcoNCwgNikgJSA2ICsgMSxcbiAgICAgICAgICAvLyBsYXN0IDYgZGlnaXRzIGNvbnRyb2wgY29sb3IuIFVwZGF0ZWQgdXNpbmcgQ1NTIGZpbHRlcjogaHVlLXJvdGF0ZVxuICAgICAgICAgIC8vIHdoaWNoIGhhcyAzNjAgZGVncmVlczpcbiAgICAgICAgICBza2luQ29sb3JDaG9pY2U6IHBhcnNlSW50KGRuYVN0ci5zdWJzdHJpbmcoNiwgOCkgLyAxMDAgKiAzNjApLFxuICAgICAgICAgIGV5ZUNvbG9yQ2hvaWNlOiBwYXJzZUludChkbmFTdHIuc3Vic3RyaW5nKDgsIDEwKSAvIDEwMCAqIDM2MCksXG4gICAgICAgICAgY2xvdGhlc0NvbG9yQ2hvaWNlOiBwYXJzZUludChkbmFTdHIuc3Vic3RyaW5nKDEwLCAxMikgLyAxMDAgKiAzNjApLFxuICAgICAgICAgIHpvbWJpZU5hbWU6IG5hbWUsXG4gICAgICAgICAgem9tYmllRGVzY3JpcHRpb246IFwiQSBMZXZlbCAxIENyeXB0b1pvbWJpZVwiLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b21iaWVEZXRhaWxzXG4gICAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0Wm9tYmllc0J5T3duZXIoKVxuICAgIH0sIFtdKTsgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDcnlwdG9ab21iaWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Z2V0Wm9tYmllZGV0YWlscywgY3JlYXRlUmFuZG9tWm9tYmllLCBnZW5lcmF0ZVpvbWJpZSxnZXRab21iaWVzQnlPd25lcixcbiAgICAgICAgICB6b21iaWVzLCBpZHNcbiAgICAgICAgfX0gPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NyeXB0b1pvbWJpZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiQ2hlY2tJZldhbGxldENvbm5lY3RlZCIsImNvbmVjdFdhbGxldCIsImNvbm5lY3RpbmdXaXRoQ29udHJhY3QiLCJDcnlwdG9ab21iaWVDb250ZXh0IiwiQ3J5cHRvWm9tYmllUHJvdmlkZXIiLCJjaGlsZHJlbiIsInpvbWJpZXMiLCJzZXRab21iaWVzIiwiem9tYmllTmFtZSIsInNldFpvbWJpZU5hbWUiLCJ6b21iaWVEbmEiLCJzZXRab21iaWVEbmEiLCJ6b21iaWVJZCIsInNldFpvbWJpZUlkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImlkcyIsInNldElkcyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXRab21iaWVzQnlPd25lciIsImNvbnRyYWN0IiwiY29uc29sZSIsImxvZyIsImdldFpvbWJpZWRldGFpbHMiLCJpZCIsInpvbWJpZSIsInJlIiwiY3JlYXRlUmFuZG9tWm9tYmllIiwibmFtZSIsImNyZWF0ZVpvbWJpZVR4Iiwid2FpdCIsImdlbmVyYXRlWm9tYmllIiwiZG5hIiwiZG5hU3RyIiwiU3RyaW5nIiwibGVuZ3RoIiwiem9tYmllRGV0YWlscyIsImhlYWRDaG9pY2UiLCJzdWJzdHJpbmciLCJleWVDaG9pY2UiLCJzaGlydENob2ljZSIsInNraW5Db2xvckNob2ljZSIsInBhcnNlSW50IiwiZXllQ29sb3JDaG9pY2UiLCJjbG90aGVzQ29sb3JDaG9pY2UiLCJ6b21iaWVEZXNjcmlwdGlvbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CryptoZombieContext.js\n"));

/***/ })

});