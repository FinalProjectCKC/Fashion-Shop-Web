webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./containers/LayoutContainer/Header/Header.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_Popover_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Popover/Popover */ "./components/Popover/Popover.tsx");
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/SearchBox/SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! contexts/search/search.context */ "./contexts/search/search.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var contexts_language_language_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! contexts/language/language.context */ "./contexts/language/language.context.js");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! image/logo.svg */ "./image/logo.svg");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");








var _jsxFileName = "/Users/ad/Downloads/Pickbazar - React GraphQL Ecommerce Template/pickbazar/packages/shop/containers/LayoutContainer/Header/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



















var MenuArray = [{
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["GROCERY_PAGE"],
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["FruitsVegetable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }),
  label: "Grocery"
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["MAKEUP_PAGE"],
  label: "Makeup",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["FacialCare"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["BAGS_PAGE"],
  label: "Bags",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["Handbag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["CLOTHING"],
  label: "Clothing",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["DressIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["FURNITURE_PAGE"],
  label: "Furniture",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["FurnitureIcon"], {
    width: "15px",
    height: "13px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["BOOK_PAGE"],
  label: "Book",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["BookIcon"], {
    width: "15px",
    height: "13px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })
}];
var DropDownMenuArray = [{
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["PROFILE_PAGE"],
  label: "Profile",
  intlId: "navlinkProfile"
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["PROCEED_TO_CHECKOUT_PAGE"],
  label: "Checkout",
  intlId: "navlinkCheckout"
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["YOUR_ORDER"],
  label: "Order",
  intlId: "sidebarYourOrder"
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["ORDER_RECEIVED"],
  label: "Order invoice",
  intlId: "navlinkOrderReceived"
}];
var LanguageArray = [{
  id: "ar",
  label: "Arabic",
  intlLangName: "intlArabic",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["SAFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })
}, {
  id: "zh",
  label: "Chinese",
  intlLangName: "intlChinese",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["CNFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })
}, {
  id: "en",
  label: "English",
  intlLangName: "intlEnglish",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["USFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })
}, {
  id: "de",
  label: "German",
  intlLangName: "intlGerman",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["DEFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })
}, {
  id: "he",
  label: "Hebrew",
  intlLangName: "intlHebrew",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["ILFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  })
}, {
  id: "es",
  label: "Spanish",
  intlLangName: "intlSpanish",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["ESFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })
}];

var Header = function Header(_ref) {
  var style = _ref.style,
      className = _ref.className,
      token = _ref.token,
      pathname = _ref.pathname;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(contexts_language_language_context__WEBPACK_IMPORTED_MODULE_20__["default"]),
      lang = _useContext.state.lang,
      toggleLanguage = _useContext.toggleLanguage;

  var activeMenuItem = MenuArray.find(function (item) {
    return item.link === pathname;
  });
  var selectedLangindex = LanguageArray.findIndex(function (x) {
    return x.id === lang;
  });

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__["AuthContext"]),
      isAuthenticated = _useContext2.authState.isAuthenticated,
      authDispatch = _useContext2.authDispatch;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_15__["SearchContext"]),
      state = _useContext3.state,
      dispatch = _useContext3.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(activeMenuItem || {
    link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["GROCERY_PAGE"],
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["FruitsVegetable"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }),
    label: "Grocery"
  }),
      activeMenu = _useState[0],
      setActiveMenu = _useState[1];

  var text = state.text;

  var _handleSearch = function handleSearch(text) {
    dispatch({
      type: "UPDATE",
      payload: _objectSpread({}, state, {
        text: text
      })
    });
  };

  var page = state.page,
      urlState = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(state, ["page"]);

  var handleClickSearchButton = function handleClickSearchButton() {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push({
      pathname: pathname === "/" ? "/grocery" : pathname,
      query: _objectSpread({}, urlState, {
        text: text
      })
    });
  };

  var handleLogout = function handleLogout() {
    if (true) {
      localStorage.removeItem("access_token");
      authDispatch({
        type: "SIGN_OUT"
      });
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
    }
  };

  var resetSearch = function resetSearch(selectedMenu) {
    setActiveMenu(selectedMenu);
    dispatch({
      type: "RESET"
    });
  };

  var NavItem = function NavItem(item) {
    return __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: item.link,
      onClick: function onClick() {
        return resetSearch(item);
      },
      className: "menu-item",
      href: item.link,
      label: item.label,
      icon: item.icon,
      iconClass: "menu-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    });
  };

  var handleToggleLanguage = function handleToggleLanguage(e) {
    toggleLanguage(e.target.value);
  };

  var LanguageMenu = function LanguageMenu(item) {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["LanguageItem"], {
      onClick: handleToggleLanguage,
      key: item.id,
      value: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, item.icon), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__["FormattedMessage"], {
      id: item.intlLangName,
      defaultMessage: item.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }));
  };

  var signInOutForm = function signInOutForm() {
    authDispatch({
      type: "SIGNIN"
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_11__["openModal"])({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_17__["default"],
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto"
      }
    });
  };

  var isHomePage = pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["HOME_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["GROCERY_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["CLOTHING"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["MAKEUP_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["BOOK_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["FURNITURE_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_25__["BAGS_PAGE"];
  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["default"], {
    style: style,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["HeaderLeftSide"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["Logo"], {
    onClick: function onClick() {
      return resetSearch({
        link: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["GROCERY_PAGE"],
        icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["FruitsVegetable"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }),
        label: "Grocery"
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["HOME_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("img", {
    src: image_logo_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
    alt: "pickbazar-admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  })))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["MainMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "right",
    handler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["SelectedType"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["TypeIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, activeMenu.icon), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, activeMenu.label)), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["DropDownArrow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["MenuDown"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, MenuArray.map(NavItem)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }))), isHomePage ? __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "headerSearch",
    handleSearch: function handleSearch(value) {
      return _handleSearch(value);
    },
    onClick: handleClickSearchButton,
    placeholder: "Search anything...",
    hideType: true,
    minimal: true,
    showSvg: true,
    style: {
      width: "100%"
    },
    value: text || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }) : null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_22__["HeaderRightSide"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "menu-item",
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["OFFER_PAGE"],
    label: "Offer",
    intlId: "navlinkOffer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "menu-item",
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_25__["HELP_PAGE"],
    label: "Need Help",
    intlId: "navlinkHelp",
    iconClass: "menu-icon",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_21__["HelpIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), !isAuthenticated ? __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClick: signInOutForm,
    size: "small",
    title: "Join",
    style: {
      fontSize: 15,
      color: "#fff"
    },
    intlButtonId: "joinButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }) : __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: __jsx("img", {
      src: image_user_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
      alt: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, DropDownMenuArray.map(function (item, idx) {
      return __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: idx,
        className: "menu-item",
        href: item.link,
        label: item.label,
        intlId: item.intlId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      });
    }), __jsx("div", {
      className: "menu-item",
      onClick: handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__["FormattedMessage"], {
      id: "navlinkLogout",
      defaultMessage: "Logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }))))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.4c377a15bc05873181c8.hot-update.js.map