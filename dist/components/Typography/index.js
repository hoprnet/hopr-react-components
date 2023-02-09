"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const H2 = _styled.default.h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: 'Source Code Pro';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 50px;\n  line-height: 1.25;\n\n\n  letter-spacing: 0.5px;\n\n  color: #414141;\n  margin-bottom: 32px;\n  \n  &.typography--center{\n    text-align: center;\n  }\n  &.typography--fullWidth{\n    width: 100%;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 36px;\n  }\n  @media (max-width: 330px) {\n    font-size: 28px;\n  }\n"])));
const H5 = _styled.default.h5(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: 'Source Code Pro';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 28px;\n  line-height: 25px;\n  letter-spacing: 0.15px;\n  color: #414141;\n  &.typography--center{\n    text-align: center;\n  }\n"])));
const H6 = _styled.default.h6(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: 'Source Code Pro';\n  font-style: normal;\n  font-weight: 700;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n  color: #414141;\n  margin: 0;\n  &.typography--center{\n    text-align: center;\n  }\n  &.typography--white {\n    color: #fff\n  }\n  &.mb32 {\n    margin-bottom: 32px;\n  }\n"])));
const PlainText = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: 'Source Code Pro';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.6;\n  /* or 144% */\n\n  text-align: left;\n  \n  &.typography--center {\n    text-align: center;\n  }\n  letter-spacing: 0.25px;\n\n  color: #414141;\n  margin-bottom: 32px;\n  @media (max-width: 768px) {\n    font-size: 16px;\n  }\n  @media (max-width: 330px) {\n    font-size: 14px;\n  }\n\n  &.mb80 {\n    margin-bottom: 80px;\n  }\n"])));
function Typography(props) {
  if (props.type === "h2") {
    return /*#__PURE__*/React.createElement(H2, {
      className: "Typography--h2 ".concat(props.className, " ").concat(props.center ? 'typography--center' : '', " ").concat(props.fullWidth ? 'typography--fullWidth' : '')
    }, props.children);
  } else if (props.type === "h5") {
    return /*#__PURE__*/React.createElement(H5, {
      className: "Typography--h5 ".concat(props.className, " ").concat(props.center ? 'typography--center' : '', " ").concat(props.fullWidth ? 'typography--fullWidth' : '')
    }, props.children);
  } else if (props.type === "h6") {
    return /*#__PURE__*/React.createElement(H6, {
      className: "Typography--h5 ".concat(props.className, " ").concat(props.white ? 'typography--white' : '')
    }, props.children);
  }
  return /*#__PURE__*/React.createElement(PlainText, {
    className: "Typography--PlainText ".concat(props.className, " ").concat(props.center ? 'typography--center' : '')
  }, props.children);
}
var _default = Typography;
exports.default = _default;
Typography.defaultProps = {
  className: ''
};