"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltipWrapper = _interopRequireDefault(require("./tooltipWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(props) {
  var idProp = props.idProp,
      children = props.children,
      tooltipRender = props.tooltipRender,
      defaultDisplay = props.defaultDisplay;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tooltipWrapper.default, {
    idProp: idProp,
    tooltipRender: tooltipRender,
    defaultDisplay: defaultDisplay
  }, children));
};

Tooltip.propTypes = {
  idProp: _propTypes.default.string,
  defaultDisplay: _propTypes.default.bool,
  children: _propTypes.default.node,
  tooltipRender: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string])
};
Tooltip.defaultProps = {
  idProp: 'nuggie-tooltip-default',
  defaultDisplay: false,
  children: null,
  tooltipRender: null
};
var _default = Tooltip;
exports.default = _default;