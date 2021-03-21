webpackHotUpdate("app",{

/***/ "./src/recommend.js":
/*!**************************!*\
  !*** ./src/recommend.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recommend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recomPaper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recomPaper */ "./src/recomPaper.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/recommend.js";

/*global chrome*/



class Recommend extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.getRecommendation = async () => {
      const response = await fetch('http://localhost:5000/api/scrap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.state.currentURL
        })
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    this.state = {
      recommend: [{
        title: "Stripe's value huts $95B",
        img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
        date: Date().toLocaleString(),
        match: 95
      }, {
        title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
        img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
        date: Date().toLocaleString(),
        match: 65
      }],
      savedTags: []
    };
    this.getRecommendation = this.getRecommendation.bind(this);
  }

  componentDidMount() {
    let newThis = this;
    chrome.storage.local.get(['tags'], function (result) {
      newThis.setState({
        savedTags: result.tags
      });
    });
  }

  // getTagApi() {
  //     this.callApiGetTag()
  //         .then(res => { 
  //             this.setState({ savedTags: res.express }) 
  //         })
  //         .catch(err => console.log(err));
  // }
  // callApiGetTag = async () => {
  //     const response = await fetch('http://localhost:5000/api/getTags');
  //     const body = await response.json();
  //     if (response.status !== 200) throw Error(body.message);
  //     return body;
  //   };
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Follow more tags to receive recommendations specific to your interest "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "Recommended For You"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_recomPaper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        recommendation: this.state.recommend
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.f65b418c338046b8d891.hot-update.js.map