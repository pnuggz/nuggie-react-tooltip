"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(props) {
  var idProp = props.idProp,
      tooltipRender = props.tooltipRender,
      targetDimLeft = props.targetDimLeft,
      targetDimTop = props.targetDimTop,
      targetDimWidth = props.targetDimWidth;
  var tooltipContentPositioning = {
    position: 'absolute',
    bottom: window.innerHeight - targetDimTop + 10 - window.scrollY,
    left: targetDimLeft + targetDimWidth / 2 + window.scrollX
  };
  var tooltipContentStyle = {
    position: 'relative',
    left: '-50%',
    padding: '8px 16px',
    borderRadius: 4,
    background: '#424242',
    color: 'white'
  };
  var tooltipArrowStyle = {
    position: 'absolute',
    bottom: -10,
    left: 'calc(50% - 5px)',
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#424242 transparent transparent transparent'
  };
  return _react.default.createElement("span", {
    style: tooltipContentPositioning
  }, _react.default.createElement("span", {
    id: "".concat(idProp, "-content"),
    style: tooltipContentStyle
  }, tooltipRender, _react.default.createElement("span", {
    style: tooltipArrowStyle
  })));
};

Tooltip.propTypes = {
  idProp: _propTypes.default.string,
  tooltipRender: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  targetDimLeft: _propTypes.default.number,
  targetDimTop: _propTypes.default.number,
  targetDimWidth: _propTypes.default.number
};
Tooltip.defaultProps = {
  idProp: 'nuggie-tooltip-default',
  tooltipRender: null,
  targetDimLeft: 0,
  targetDimTop: 0,
  targetDimWidth: 0
};
var _default = Tooltip;
exports.default = _default;