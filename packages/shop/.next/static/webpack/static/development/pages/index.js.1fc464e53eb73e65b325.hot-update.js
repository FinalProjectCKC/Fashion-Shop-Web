webpackHotUpdate("static/development/pages/index.js",{

/***/ "./image/grocery.png":
/*!***************************!*\
  !*** ./image/grocery.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery-c5497ec04053d4118bd7693e7818454c.png";

/***/ }),

/***/ "./image/logo_text.png":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helper_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helper/apollo */ "./helper/apollo.js");
/* harmony import */ var containers_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/Banner/Banner */ "./containers/Banner/Banner.tsx");
/* harmony import */ var components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/StoreNav/StoreNav */ "./components/StoreNav/StoreNav.tsx");
/* harmony import */ var components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Carousel/Carousel */ "./components/Carousel/Carousel.tsx");
/* harmony import */ var containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! containers/Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.tsx");
/* harmony import */ var containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! containers/Products/Products */ "./containers/Products/Products.tsx");
/* harmony import */ var containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/Cart/CartPopUp */ "./containers/Cart/CartPopUp.tsx");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var containers_LocationModal_LocationModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/LocationModal/LocationModal */ "./containers/LocationModal/LocationModal.tsx");
/* harmony import */ var components_helpers_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/helpers/session */ "./components/helpers/session.ts");
/* harmony import */ var styled_pages_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled/pages.style */ "./styled/pages.style.tsx");
/* harmony import */ var data_offers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! data/offers */ "./data/offers.ts");
/* harmony import */ var image_grocery_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! image/grocery.png */ "./image/grocery.png");
/* harmony import */ var image_grocery_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(image_grocery_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var constants_storeType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! constants/storeType */ "./constants/storeType.ts");
var _jsxFileName = "/Users/ad/Downloads/Pickbazar - React GraphQL Ecommerce Template/Fashion-Shop-Web/packages/shop/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













 // Static Data Import Here




var PAGE_TYPE = "grocery";

function HomePage(_ref) {
  var deviceType = _ref.deviceType;
  var targetRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var modalTimer = setTimeout(function () {
      if (!Object(components_helpers_session__WEBPACK_IMPORTED_MODULE_12__["getCookie"])("zip_code") && !Object(components_helpers_session__WEBPACK_IMPORTED_MODULE_12__["getCookie"])("first_visit")) {
        Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_10__["openModal"])({
          show: true,
          overlayClassName: "quick-view-overlay",
          closeOnClickOutside: true,
          component: containers_LocationModal_LocationModal__WEBPACK_IMPORTED_MODULE_11__["default"],
          // closeComponent: "div",
          config: {
            enableResizing: false,
            disableDragging: true,
            className: "quick-view-modal",
            width: 458,
            height: "auto"
          }
        });
      }
    }, 1800);
    return function () {
      clearTimeout(modalTimer);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: "smooth"
      });
    }
  }, [query]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "PickBazar")), __jsx(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(containers_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    intlTitleId: "groceriesTitle",
    intlDescriptionId: "groceriesSubTitle",
    imageUrl: image_grocery_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), deviceType.desktop ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["MobileCarouselDropdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: constants_storeType__WEBPACK_IMPORTED_MODULE_16__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["OfferSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: "0 -10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    deviceType: deviceType,
    data: data_offers__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["MainContentArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["SidebarSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["ContentSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    ref: targetRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))))) : __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["MainContentArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: constants_storeType__WEBPACK_IMPORTED_MODULE_16__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["OfferSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    deviceType: deviceType,
    data: data_offers__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_13__["ContentSection"], {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx(containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(helper_apollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.1fc464e53eb73e65b325.hot-update.js.map