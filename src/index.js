import React from 'react';
import TooltipWrapper, {
  propTypes as tooltipWrapperPropTypes,
  defaultProps as tooltipWrapperDefaultProps,
} from './tooltipWrapper';

const Tooltip = props => {
  const {
    targetId,
    children,
    tooltipRender,
    defaultDisplay,
    placement,
    outerClassName,
    innerClassName,
    arrowClassName,
  } = props;

  return (
    <React.Fragment>
      <TooltipWrapper
        targetId={targetId}
        tooltipRender={tooltipRender}
        defaultDisplay={defaultDisplay}
        placement={placement}
        outerClassName={outerClassName}
        innerClassName={innerClassName}
        arrowClassName={arrowClassName}
      >
        {children}
      </TooltipWrapper>
    </React.Fragment>
  );
};

Tooltip.propTypes = tooltipWrapperPropTypes;
Tooltip.defaultProps = tooltipWrapperDefaultProps;

export default Tooltip;
