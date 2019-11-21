import React from 'react';
import PropTypes from 'prop-types';
import { Popper as ReactPopper } from 'react-popper';

export const propTypes = {
  tooltipId: PropTypes.string.isRequired,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  placement: PropTypes.string,
  outerClassName: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  placementPrefix: PropTypes.string,
  sourceRef: PropTypes.object,
  onTooltipMouseOver: PropTypes.function,
  onTooltipMouseLeave: PropTypes.function
};

export const defaultProps = {
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

const Tooltip = props => {
  const {
    tooltipId,
    tooltipRender,
    outerClassName,
    innerClassName,
    arrowClassName,
    placement: presetPlacement,
    placementPrefix,
    sourceRef,
    onTooltipMouseOver,
    onTooltipMouseLeave
  } = props;

  const extendedModifiers = {
    offset: 0,
    flip: { enabled: true, behavior: 'flip' },
    preventOverflow: 'scrollParent',
  };

  return (
    <ReactPopper
      referenceElement={sourceRef}
      modifiers={extendedModifiers}
      placement={presetPlacement}
    >
      {({ ref, style, placement: popperPlacement, arrowProps }) => (
        <span
          ref={ref}
          style={style}
          className={`tooltip show ${placementPrefix + popperPlacement} ${outerClassName}`}
          data-placement={popperPlacement}
          x-placement={popperPlacement}
          onMouseOver={onTooltipMouseOver}
          onMouseLeave={onTooltipMouseLeave}
          role="tooltip"
          aria-describedby={`${tooltipId}-tooltip-content`}
        >
          <span className={`tooltip-inner ${innerClassName}`} id={`${tooltipId}-content`}>
            {tooltipRender}
          </span>
          <span ref={arrowProps.ref} className={arrowClassName} style={arrowProps.style} />
        </span>
      )}
    </ReactPopper>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
