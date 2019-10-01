webpackHotUpdate("static/development/pages/_sandbox/animations.js",{

/***/ "./pages/_sandbox/animations.jsx":
/*!***************************************!*\
  !*** ./pages/_sandbox/animations.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _imports_wrap_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imports/wrap-page */ "./imports/wrap-page.jsx");

var _jsxFileName = "/home/ivansglazunov/Projects/codesandbox/sandbox/pages/_sandbox/animations.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (Object(_imports_wrap_page__WEBPACK_IMPORTED_MODULE_5__["wrapPage"])(function () {
  // инициализировать одно spring поведение
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(function () {
    return {
      s: 0,
      spx: 0,
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      _useSpring2$ = _useSpring2[0],
      xys = _useSpring2$.xys,
      s = _useSpring2$.s,
      spx = _useSpring2$.spx,
      setSpring = _useSpring2[1]; // создать реакцию на скролл (затем передать в div)


  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log(e.target.scrollTop, e.target.scrollHeight, e.target.scrollTop / e.target.scrollHeight + temp1.clientHeight);
    return setSpring({
      s: e.target.scrollTop / e.target.scrollHeight + temp1.clientHeight,
      spx: e.target.scrollTop
    });
  }, []); // создать поведения для разных элементов и передать их в style transform
  // s от 0 до 1 прокрученность от начала до конца, xys[0] положение мыши по x, xys[1] по y

  var item1 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "scale(".concat(s, ") perspective(600px) rotateX(").concat(xys[0], "deg) rotateY(").concat(xys[1], "deg)");
  });
  var item2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "rotate(".concat(s * 100, "deg)");
  });
  var item3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "translateY(".concat(-(s * 2000) + 600, "px)");
  });
  var item4 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "translateY(".concat(-(s * 300) + 0, "px)");
  });
  var item5 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "scaleX(".concat(s * 2, ")");
  });
  var item6 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([s, xys], function (s, xys) {
    return "scaleY(".concat(s, ")");
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onScroll: onScroll,
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return setSpring({
        xys: [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
      });
    },
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item2,
      height: 300,
      background: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item3,
      height: 300,
      background: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item4,
      height: 300,
      background: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item5,
      transformOrigin: 'center left',
      height: 100,
      background: 'yellow'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx("div", {
    style: {
      height: 1000
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item1,
      position: 'fixed',
      top: 'calc(50% - 150px)',
      left: 'calc(50% - 150px)',
      width: 300,
      height: 300,
      background: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: {
      transform: item6,
      position: 'fixed',
      top: 0,
      left: 0,
      width: 10,
      height: '100%',
      background: 'brown'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })));
}));

/***/ })

})
//# sourceMappingURL=animations.js.268cd40b4d85962b7c9d.hot-update.js.map