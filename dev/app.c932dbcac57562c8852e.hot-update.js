webpackHotUpdate("app",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! exports provided: messageInBackground, getCurrentUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInBackground", function() { return messageInBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
// If your extension doesn't need a background script, just leave this file empty
messageInBackground(); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}
function getCurrentUrl() {}

/***/ })

})
//# sourceMappingURL=app.c932dbcac57562c8852e.hot-update.js.map