import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  targetDimLeft: PropTypes.number,
  targetDimTop: PropTypes.number,
  targetDimWidth: PropTypes.number,
  targetId: PropTypes.string,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  placement: PropTypes.string,
  outerClassName: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  placementPrefix: PropTypes.string,
};

export const defaultProps = {
  targetDimLeft: 0,
  targetDimTop: 0,
  targetDimWidth: 0,
  targetId: 'nuggie-tooltip-default',
  tooltipRender: null,
  placement: 'auto',
  outerClassName: '',
  innerClassName: '',
  arrowClassName: '',
  placementPrefix: null,
};

const Tooltip = props => {
  const {
    idProp,
    tooltipRender,
    targetDimLeft,
    targetDimTop,
    targetDimWidth,
    outerClassName,
    innerClassName,
    arrowClassName,
  } = props;

  const tooltipContentPositioning = {
    position: 'absolute',
    bottom: window.innerHeight - targetDimTop + 10 - window.scrollY,
    left: targetDimLeft + targetDimWidth / 2 + window.scrollX,
  };

  const tooltipContentStyle = {
    position: 'relative',
    left: '-50%',
    padding: '8px 16px',
    borderRadius: 4,
    background: '#424242',
    color: 'white',
  };

  const tooltipArrowStyle = {
    position: 'absolute',
    bottom: -10,
    left: 'calc(50% - 5px)',
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#424242 transparent transparent transparent',
  };

  return (
    <span className={`tooltip bs-tooltip-auto ${outerClassName}`} x-placement="auto">
      <span className={`tooltip-inner ${innerClassName}`} id={`${idProp}-content`}>
        {tooltipRender}
        <span className={arrowClassName} style={tooltipArrowStyle} />
      </span>
    </span>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
