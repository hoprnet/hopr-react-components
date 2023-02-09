"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _navbar = _interopRequireDefault(require("./navbar"));
var _footer = _interopRequireDefault(require("./footer"));
var _index = _interopRequireDefault(require("../Banner/index.jsx"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SLayout = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"])));
const Content = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 68px;\n//  max-width: 1096px;\n  \n  //@media screen and (max-width: 700px) {\n  //  margin-top: 128px;\n  //}\n  //@media screen and (max-width: 293px) {\n  //  margin-top: 216px;\n  //}\n"])));
const Layout = _ref => {
  let {
    className = '',
    children,
    setShowSetup
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(SLayout, {
    className: "Layout"
  }, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement(Content, {
    className: "Content"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    onButtonClick: setShowSetup
  }), children), /*#__PURE__*/_react.default.createElement(_footer.default, null));
};
var _default = Layout;
exports.default = _default;