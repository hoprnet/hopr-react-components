"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _index = _interopRequireDefault(require("../Section/index.jsx"));
var _index2 = _interopRequireDefault(require("../Typography/index.jsx"));
var _reactIdGenerator = require("react-id-generator");
var _lottieWeb = _interopRequireDefault(require("lottie-web"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Container = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 24px;\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"])));
const Left = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 5;\n  display: flex;\n  justify-content: center;\n"])));
const Right = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 6;\n  display: flex;\n  align-items: center;\n"])));
const Animation = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: 300px;\n  max-height: 300px;\n  overflow: hidden;\n"])));
function EncourageSection(props) {
  const [htmlId] = (0, _reactIdGenerator.useId)();
  let animationLoaded = false;
  (0, _react.useEffect)(() => {
    // check to prevent double animation load on page remount
    if (!animationLoaded) {
      _lottieWeb.default.loadAnimation({
        container: document.querySelector("#".concat(htmlId)),
        animationData: props.animationData
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    animationLoaded = true;
  }, []);
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    className: "EncourageSectionSection ".concat(props.className),
    id: props.id
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    type: "h2",
    center: true,
    fullWidth: true
  }, props.title), /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Left, null, /*#__PURE__*/_react.default.createElement(Animation, {
    id: htmlId
  })), /*#__PURE__*/_react.default.createElement(Right, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    center: true
  }, props.text))));
}
var _default = EncourageSection;
exports.default = _default;