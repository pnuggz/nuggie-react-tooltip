import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = props => {
  const { idProp, tooltipRender, targetDimLeft, targetDimTop, targetDimWidth } = props;

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
    <span style={tooltipContentPositioning}>
      <span id={`${idProp}-content`} style={tooltipContentStyle}>
        {tooltipRender}
        <span style={tooltipArrowStyle} />
      </span>
    </span>
  );
};

Tooltip.propTypes = {
  idProp: PropTypes.string,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  targetDimLeft: PropTypes.number,
  targetDimTop: PropTypes.number,
  targetDimWidth: PropTypes.number,
};

Tooltip.defaultProps = {
  idProp: 'nuggie-tooltip-default',
  tooltipRender: null,
  targetDimLeft: 0,
  targetDimTop: 0,
  targetDimWidth: 0,
};

export default Tooltip;
