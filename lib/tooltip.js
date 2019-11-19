"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  targetDimLeft: _propTypes.default.number,
  targetDimTop: _propTypes.default.number,
  targetDimWidth: _propTypes.default.number,
  targetId: _propTypes.default.string,
  tooltipRender: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  placement: _propTypes.default.string,
  outerClassName: _propTypes.default.string,
  innerClassName: _propTypes.default.string,
  arrowClassName: _propTypes.default.string,
  placementPrefix: _propTypes.default.string
};
exports.propTypes = propTypes;
var defaultProps = {
  targetDimLeft: 0,
  targetDimTop: 0,
  targetDimWidth: 0,
  targetId: 'nuggie-tooltip-default',
  tooltipRender: null,
  placement: 'auto',
  outerClassName: '',
  innerClassName: '',
  arrowClassName: '',
  placementPrefix: null
};
exports.defaultProps = defaultProps;

var Tooltip = function Tooltip(props) {
  var idProp = props.idProp,
      tooltipRender = props.tooltipRender,
      targetDimLeft = props.targetDimLeft,
      targetDimTop = props.targetDimTop,
      targetDimWidth = props.targetDimWidth,
      outerClassName = props.outerClassName,
      innerClassName = props.innerClassName,
      arrowClassName = props.arrowClassName;
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
    className: "tooltip bs-tooltip-auto ".concat(outerClassName),
    "x-placement": "auto"
  }, _react.default.createElement("span", {
    className: "tooltip-inner ".concat(innerClassName),
    id: "".concat(idProp, "-content")
  }, tooltipRender, _react.default.createElement("span", {
    className: arrowClassName,
    style: tooltipArrowStyle
  })));
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
var _default = Tooltip;
exports.default = _default;