"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FreestyleAdminWidget = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _require = require("react-tabs"),
  Tab = _require.Tab,
  Tabs = _require.Tabs,
  TabList = _require.TabList,
  TabPanel = _require.TabPanel;
var FreestyleAdminWidget = /*#__PURE__*/function (_Component) {
  _inherits(FreestyleAdminWidget, _Component);
  var _super = _createSuper(FreestyleAdminWidget);
  function FreestyleAdminWidget(props) {
    var _this;
    _classCallCheck(this, FreestyleAdminWidget);
    _this = _super.call(this, props);
    _this.state = {
      tabIndex: 0
    };
    return _this;
  }
  _createClass(FreestyleAdminWidget, [{
    key: "onTabsSelectedIndexChanged",
    value: function onTabsSelectedIndexChanged(index) {
      this.state.tabIndex = index;
      this.setState(this.state);
    }
  }, {
    key: "getDeprecatedWidget",
    value: function getDeprecatedWidget() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "These tools are now deprecated."), /*#__PURE__*/_react["default"].createElement("div", null, "Please use the new Admin Wizard ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://freestylejudge.com/?startup=adminTools"
      }, "HERE")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "adminContainer"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Admin Panel"), /*#__PURE__*/_react["default"].createElement(Tabs, {
        selectedIndex: this.state.tabIndex,
        onSelect: function onSelect(index) {
          return _this2.onTabsSelectedIndexChanged(index);
        }
      }, /*#__PURE__*/_react["default"].createElement(TabList, null, /*#__PURE__*/_react["default"].createElement(Tab, null, "Admin Wizard"), /*#__PURE__*/_react["default"].createElement(Tab, null, "Names"), /*#__PURE__*/_react["default"].createElement(Tab, null, "Events"), /*#__PURE__*/_react["default"].createElement(Tab, null, "Results"), /*#__PURE__*/_react["default"].createElement(Tab, null, "Points"), /*#__PURE__*/_react["default"].createElement(Tab, null, "Export")), /*#__PURE__*/_react["default"].createElement(TabPanel, null, /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://d1z4hgbk90is1e.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      })), /*#__PURE__*/_react["default"].createElement(TabPanel, null, this.getDeprecatedWidget(), /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://d2mkj2exs79ufw.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      })), /*#__PURE__*/_react["default"].createElement(TabPanel, null, this.getDeprecatedWidget(), /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://d1o7r89dcix5uk.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      })), /*#__PURE__*/_react["default"].createElement(TabPanel, null, this.getDeprecatedWidget(), /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://d508y3x9kgnlw.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      })), /*#__PURE__*/_react["default"].createElement(TabPanel, null, this.getDeprecatedWidget(), /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://dodpx3saezigi.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      })), /*#__PURE__*/_react["default"].createElement(TabPanel, null, /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://demey0las2y6z.cloudfront.net",
        style: {
          border: "0"
        },
        allow: "clipboard-write"
      }))));
    }
  }]);
  return FreestyleAdminWidget;
}(_react.Component);
exports.FreestyleAdminWidget = FreestyleAdminWidget;
