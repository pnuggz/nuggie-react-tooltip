import React from 'react';
import PropTypes from 'prop-types';
import { Popper as ReactPopper } from 'react-popper';

export const propTypes = {
  targetId: PropTypes.string,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  placement: PropTypes.string,
  outerClassName: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  placementPrefix: PropTypes.string,
  sourceRef: PropTypes.object,
};

export const defaultProps = {
  targetId: 'nuggie-tooltip-default',
  tooltipRender: null,
  placement: 'auto',
  outerClassName: '',
  innerClassName: '',
  arrowClassName: 'arrow',
  placementPrefix: 'bs-tooltip-',
  sourceRef: null,
};

const Tooltip = props => {
  const {
    targetId,
    tooltipRender,
    outerClassName,
    innerClassName,
    arrowClassName,
    placement,
    placementPrefix,
    sourceRef,
  } = props;

  const extendedModifiers = {
    offset: 0,
    flip: { enabled: true, behavior: 'flip' },
    preventOverflow: 'scrollParent',
  };

  return (
    <ReactPopper referenceElement={sourceRef} modifiers={extendedModifiers} placement={placement}>
      {({ ref, style, placement: popperPlacement, arrowProps }) => (
        <span
          ref={ref}
          style={style}
          className={`tooltip show ${placementPrefix + popperPlacement} ${outerClassName}`}
          x-placement={placement}
        >
          <span className={`tooltip-inner ${innerClassName}`} id={`${targetId}-content`}>
            {tooltipRender}
            <span ref={arrowProps.ref} className={arrowClassName} style={arrowProps.style} />
          </span>
        </span>
      )}
    </ReactPopper>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
