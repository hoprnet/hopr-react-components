"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.reverse.js");
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _index = _interopRequireDefault(require("../Typography/index.jsx"));
var _index2 = _interopRequireDefault(require("../Button/index.jsx"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SBrick = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 16px;\n  &.Brick--reverse {\n    flex-direction: row-reverse;\n    gap: 32px;\n  }\n  &.mbt80 {\n    margin-top: 80px;\n    margin-bottom: 80px;\n  }\n"])));
const TextContainer = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 6;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  div {\n    text-align: left;\n  }\n  ", "\n  \n"])), props => props.centerText ? 'justify-content: center;' : '');
const ImageContainer = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-self: flex-start;\n  flex: 5;\n  @media (max-width: 699px) {\n    display: none;\n  }\n"])));
const Image = _styled.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: auto;\n  max-width: 100%;\n  border-radius: 28px;\n  ", "\n  &.mobileOnly {\n    margin-bottom: 16px;\n    @media (min-width: 700px) {\n      display: none;\n    }\n  }\n\n"])), props => props.noShadow ? '' : 'box-shadow: 0px 2px 34px -7px rgb(0 0 0 / 50%);');
function Brick(props) {
  return /*#__PURE__*/_react.default.createElement(SBrick, {
    className: "Brick ".concat(props.reverse ? 'Brick--reverse' : '', " ").concat(props.className)
  }, /*#__PURE__*/_react.default.createElement(TextContainer, {
    centerText: props.centerText
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    type: "h5"
  }, props.title), /*#__PURE__*/_react.default.createElement(Image, {
    className: "mobileOnly",
    src: props.image,
    noShadow: props.noShadow
  }), /*#__PURE__*/_react.default.createElement(_index.default, null, props.text), props.button && /*#__PURE__*/_react.default.createElement(_index2.default, {
    hopr: true,
    href: props.buttonHref,
    target: "_blank"
  }, props.button)), /*#__PURE__*/_react.default.createElement(ImageContainer, null, /*#__PURE__*/_react.default.createElement(Image, {
    src: props.image,
    noShadow: props.noShadow
  })));
}
var _default = Brick;
exports.default = _default;
Brick.defaultProps = {
  className: '',
  reverse: false
};