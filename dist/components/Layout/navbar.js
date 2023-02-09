"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _hoprLogoFull = _interopRequireDefault(require("../../assets/hopr-logos/hopr-logo-full.svg"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SNavBar = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 68px;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  background: white;\n  z-index: 10;\n"])));
const Container = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  max-width: 1096px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n"])));
const LogoImage = _styled.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 50px;\n  width: auto;\n  margin-left: 10px;\n"])));
const NavBar = () => {
  return /*#__PURE__*/_react.default.createElement(SNavBar, null, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(LogoImage, {
    alt: "Hopr logo",
    src: _hoprLogoFull.default
  })));
};
var _default = NavBar;
exports.default = _default;