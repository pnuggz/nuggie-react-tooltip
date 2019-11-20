import React from 'react';
import TooltipWrapper, {
  propTypes as tooltipWrapperPropTypes,
  defaultProps as tooltipWrapperDefaultProps,
} from './tooltipWrapper';

const Tooltip = props => {
  const { targetId, children, tooltipRender, defaultDisplay, placement } = props;

  return (
    <React.Fragment>
      <TooltipWrapper
        targetId={targetId}
        tooltipRender={tooltipRender}
        defaultDisplay={defaultDisplay}
        placement={placement}
      >
        {children}
      </TooltipWrapper>
    </React.Fragment>
  );
};

Tooltip.propTypes = tooltipWrapperPropTypes;
Tooltip.defaultProps = tooltipWrapperDefaultProps;

export default Tooltip;
