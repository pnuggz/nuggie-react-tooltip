import React from 'react';
import PropTypes from 'prop-types';
import TooltipWrapper from './tooltipWrapper';

const Tooltip = props => {
  const { idProp, children, tooltipRender, defaultDisplay } = props;

  return (
    <React.Fragment>
      <TooltipWrapper idProp={idProp} tooltipRender={tooltipRender} defaultDisplay={defaultDisplay}>
        {children}
      </TooltipWrapper>
    </React.Fragment>
  );
};

Tooltip.propTypes = {
  idProp: PropTypes.string,
  defaultDisplay: PropTypes.bool,
  children: PropTypes.node,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Tooltip.defaultProps = {
  idProp: 'nuggie-tooltip-default',
  defaultDisplay: false,
  children: null,
  tooltipRender: null,
};

export default Tooltip;
