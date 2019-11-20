"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltip = _interopRequireWildcard(require("./tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread({
  defaultDisplay: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string])
}, _tooltip.propTypes);

exports.propTypes = propTypes;

var defaultProps = _objectSpread({
  defaultDisplay: false,
  children: null
}, _tooltip.defaultProps);

exports.defaultProps = defaultProps;

var TooltipWrapper = function TooltipWrapper(props) {
  var targetId = props.targetId,
      children = props.children,
      tooltipRender = props.tooltipRender,
      defaultDisplay = props.defaultDisplay,
      placement = props.placement;

  var _useState = (0, _react.useState)(defaultDisplay),
      _useState2 = _slicedToArray(_useState, 2),
      isDisplay = _useState2[0],
      setIsDisplay = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      domNode = _useState4[0],
      setDomNode = _useState4[1];

  (0, _react.useEffect)(function () {
    setDomNode(document.getElementById(targetId).parentNode);
  }, []);
  var sourceRef = (0, _react.useRef)(null);

  var showTooltip = function showTooltip() {
    if (isDisplay !== !defaultDisplay) {
      setIsDisplay(!defaultDisplay);
    }
  };

  var hideTooltip = function hideTooltip() {
    if (isDisplay !== defaultDisplay) {
      setIsDisplay(defaultDisplay);
    }
  };

  var renderToolTip = function renderToolTip() {
    if (!isDisplay) {
      return null;
    }

    return _reactDom.default.createPortal(_react.default.createElement(_tooltip.default, {
      tooltipRender: tooltipRender,
      sourceRef: sourceRef.current,
      placement: placement
    }), domNode);
  };

  return _react.default.createElement("span", {
    className: 'tooltip-wrapper',
    key: "".concat(targetId, "-wrapper")
  }, _react.default.createElement("span", {
    key: targetId,
    id: targetId,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    ref: sourceRef,
    tabIndex: "0",
    role: "button",
    "aria-describedby": "".concat(targetId, "-content"),
    style: {
      display: 'table-cell'
    }
  }, children), renderToolTip());
  (0, _react.useEffect)(function () {}, [isDisplay]);
};

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;
var _default = TooltipWrapper;
exports.default = _default;