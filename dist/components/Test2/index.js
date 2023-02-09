"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const SSection = _styled.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  &.section--gradient{\n    background: linear-gradient(180deg,#0000b4 -110.52%,hsla(0,0%,85%,0) 60.89%);\n  }\n  &.section--yellow{\n    background: #FFFFA0;\n  }\n  &.section--dark-gradient{\n    background: linear-gradient(180deg, #0000B4 0.5%, #000050 100%);\n  }\n  &.section--grey {\n    background: #EEEEEE;\n  }\n  padding-bottom: 40px;\n  padding-top: 40px;\n"])));
const Content = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 1098px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 16px;\n  padding-right: 16px;\n  &.content--center {\n    align-items: center;\n  }\n"])));
function Section(props) {
  return /*#__PURE__*/React.createElement(SSection, {
    className: "Section ".concat(props.className, " ").concat(props.variant === 'gradient' ? ' section--gradient' : '').concat(props.variant === 'yellow' ? ' section--yellow' : '').concat(props.variant === 'darkGradient' ? ' section--dark-gradient' : '').concat(props.variant === 'grey' ? ' section--grey' : ''),
    id: props.id
  }, /*#__PURE__*/React.createElement(Content, {
    className: "Content ".concat(props.center ? ' content--center' : '')
  }, props.children));
}
var _default = Section;
exports.default = _default;