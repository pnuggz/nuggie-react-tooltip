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
  targetId: _propTypes.default.string,
  tooltipRender: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  placement: _propTypes.default.string,
  outerClassName: _propTypes.default.string,
  innerClassName: _propTypes.default.string,
  arrowClassName: _propTypes.default.string,
  placementPrefix: _propTypes.default.string,
  sourceRef: _propTypes.default.object
};
exports.propTypes = propTypes;
var defaultProps = {
  targetId: 'nuggie-tooltip-default',
  tooltipRender: null,
  placement: 'auto',
  outerClassName: '',
  innerClassName: '',
  arrowClassName: 'arrow',
  placementPrefix: 'bs-tooltip-',
  sourceRef: null
};
exports.defaultProps = defaultProps;

var Tooltip = function Tooltip(props) {
  var targetId = props.targetId,
      tooltipRender = props.tooltipRender,
      outerClassName = props.outerClassName,
      innerClassName = props.innerClassName,
      arrowClassName = props.arrowClassName,
      placement = props.placement,
      placementPrefix = props.placementPrefix,
      sourceRef = props.sourceRef;
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
    placement: placement
  }, function (_ref) {
    var ref = _ref.ref,
        style = _ref.style,
        popperPlacement = _ref.placement,
        arrowProps = _ref.arrowProps;
    return _react.default.createElement("span", {
      ref: ref,
      style: style,
      className: "tooltip show ".concat(placementPrefix + popperPlacement, " ").concat(outerClassName),
      "x-placement": placement
    }, _react.default.createElement("span", {
      className: "tooltip-inner ".concat(innerClassName),
      id: "".concat(targetId, "-content")
    }, tooltipRender, _react.default.createElement("span", {
      ref: arrowProps.ref,
      className: arrowClassName,
      style: arrowProps.style
    })));
  });
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
var _default = Tooltip;
exports.default = _default;