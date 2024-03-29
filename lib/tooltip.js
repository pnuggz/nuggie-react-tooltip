"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPopper = require("react-popper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  tooltipId: _propTypes.default.string.isRequired,
  tooltipRender: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]).isRequired,
  placement: _propTypes.default.string,
  outerClassName: _propTypes.default.string,
  innerClassName: _propTypes.default.string,
  arrowClassName: _propTypes.default.string,
  placementPrefix: _propTypes.default.string,
  sourceRef: _propTypes.default.object,
  onTooltipMouseOver: _propTypes.default.function,
  onTooltipMouseLeave: _propTypes.default.function
};
exports.propTypes = propTypes;
var defaultProps = {
  tooltipId: 'nuggie-tooltip-default',
  tooltipRender: null,
  placement: 'top',
  outerClassName: '',
  innerClassName: '',
  arrowClassName: 'arrow',
  placementPrefix: 'bs-tooltip-',
  sourceRef: null,
  onTooltipMouseOver: null,
  onTooltipMouseLeave: null
};
exports.defaultProps = defaultProps;

var Tooltip = function Tooltip(props) {
  var tooltipId = props.tooltipId,
      tooltipRender = props.tooltipRender,
      outerClassName = props.outerClassName,
      innerClassName = props.innerClassName,
      arrowClassName = props.arrowClassName,
      presetPlacement = props.placement,
      placementPrefix = props.placementPrefix,
      sourceRef = props.sourceRef,
      onTooltipMouseOver = props.onTooltipMouseOver,
      onTooltipMouseLeave = props.onTooltipMouseLeave;
  var extendedModifiers = {
    offset: 0,
    flip: {
      enabled: true,
      behavior: 'flip'
    },
    preventOverflow: 'scrollParent'
  };
  return _react.default.createElement(_reactPopper.Popper, {
    referenceElement: sourceRef,
    modifiers: extendedModifiers,
    placement: presetPlacement
  }, function (_ref) {
    var ref = _ref.ref,
        style = _ref.style,
        popperPlacement = _ref.placement,
        arrowProps = _ref.arrowProps;
    return _react.default.createElement("span", {
      ref: ref,
      style: style,
      className: "tooltip show ".concat(placementPrefix + popperPlacement, " ").concat(outerClassName),
      "data-placement": popperPlacement,
      "x-placement": popperPlacement,
      onMouseOver: onTooltipMouseOver,
      onMouseLeave: onTooltipMouseLeave,
      role: "tooltip",
      "aria-describedby": "".concat(tooltipId, "-tooltip-content")
    }, _react.default.createElement("span", {
      className: "tooltip-inner ".concat(innerClassName),
      id: "".concat(tooltipId, "-content")
    }, tooltipRender), _react.default.createElement("span", {
      ref: arrowProps.ref,
      className: arrowClassName,
      style: arrowProps.style
    }));
  });
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
var _default = Tooltip;
exports.default = _default;