"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _hoprTokenLogo = _interopRequireDefault(require("../../assets/hopr-logos/hopr-token-logo.svg"));
var _twitter = _interopRequireDefault(require("../../assets/social-networks/twitter.svg"));
var _telegram = _interopRequireDefault(require("../../assets/social-networks/telegram.svg"));
var _linkedin = _interopRequireDefault(require("../../assets/social-networks/linkedin.svg"));
var _github = _interopRequireDefault(require("../../assets/social-networks/github.svg"));
var _medium = _interopRequireDefault(require("../../assets/social-networks/medium.svg"));
var _youtube = _interopRequireDefault(require("../../assets/social-networks/youtube.svg"));
var _discord = _interopRequireDefault(require("../../assets/social-networks/discord.svg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SFooter = _styled.default.footer(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  background: linear-gradient(#000050,#0000b4);\n  color: #fff;\n  font-family: 'Source Code Pro';\n  font-style: normal;\n  font-size: 15px;\n  text-align: left;\n\n  .right-column {\n    .social-networks {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      padding: 10px 0;\n      margin: 10px 0 30px;\n    }\n\n    .social-networks a {\n      font-size: 0;\n      line-height: 0;\n      padding: 10px;\n    }\n\n    .social-networks a img {\n      height: 22px;\n      width: auto;\n    }\n\n    .links a {\n      font-size: 13px;\n      margin-right: 15px;\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n"])));
const Content = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1098px;\n  margin: auto;\n  display: flex;\n  padding: 16px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
const LeftColumn = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 32px;\n"])));
const Logo = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: auto;\n  width: 58px;\n"])));
const Addresses = _styled.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 48px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n  address {\n    text-align: left;\n    font-style: normal;\n  }\n"])));
const links = [{
  "name": "CONTACT",
  "link": "mailto:contact@hoprnet.org"
}, {
  "name": "ABOUT US",
  "link": "https://hoprnet.org/about-us/mission"
}, {
  "name": "PARTNERS",
  "link": "https://hoprnet.org/about-us/partners"
}, {
  "name": "DISCLAIMER",
  "link": "https://hoprnet.org/disclaimer"
}];
const socials = [{
  "network": "twitter",
  "img": _twitter.default,
  "link": "https://twitter.com/hoprnet"
}, {
  "network": "telegram",
  "img": _telegram.default,
  "link": "https://t.me/hoprnet"
}, {
  "network": "linkedin",
  "img": _linkedin.default,
  "link": "https://www.linkedin.com/company/hoprnet"
}, {
  "network": "github",
  "img": _github.default,
  "link": "https://github.com/hoprnet"
}, {
  "network": "medium",
  "img": _medium.default,
  "link": "https://medium.com/hoprnet"
}, {
  "network": "youtube",
  "img": _youtube.default,
  "link": "https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA"
}, {
  "network": "discord",
  "img": _discord.default,
  "link": "https://discord.gg/dEAWC4G"
}];
const Footer = () => {
  return /*#__PURE__*/_react.default.createElement(SFooter, null, /*#__PURE__*/_react.default.createElement(Content, null, /*#__PURE__*/_react.default.createElement(LeftColumn, {
    className: "left-column"
  }, /*#__PURE__*/_react.default.createElement(Logo, {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _hoprTokenLogo.default,
    alt: "HOPR Logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(Addresses, null, /*#__PURE__*/_react.default.createElement("address", null, "HOPR", /*#__PURE__*/_react.default.createElement("br", null), "Bleicherweg 33", /*#__PURE__*/_react.default.createElement("br", null), "8002 Z\xFCrich", /*#__PURE__*/_react.default.createElement("br", null), "Switzerland"), /*#__PURE__*/_react.default.createElement("address", null, "HOPR Tech Pte. Ltd.", /*#__PURE__*/_react.default.createElement("br", null), "68 Circular Road, #02-01,", /*#__PURE__*/_react.default.createElement("br", null), "049422 Singapore", /*#__PURE__*/_react.default.createElement("br", null), "Singapore")), /*#__PURE__*/_react.default.createElement("div", null, "\xA92022 HOPR Association, all rights reserved"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "social-networks"
  }, socials === null || socials === void 0 ? void 0 : socials.map((x, i) => /*#__PURE__*/_react.default.createElement("a", {
    key: i,
    href: x.link,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: x.img,
    alt: x.network
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "links"
  }, links === null || links === void 0 ? void 0 : links.map((x, i) => /*#__PURE__*/_react.default.createElement("a", {
    key: i,
    title: x.name,
    href: x.link
  }, x.name))))));
};
var _default = Footer;
exports.default = _default;