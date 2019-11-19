import React from 'react';
import TooltipWrapper, {
  propTypes as tooltipWrapperPropTypes,
  defaultProps as tooltipWrapperDefaultProps,
} from './tooltipWrapper';

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

Tooltip.propTypes = tooltipWrapperPropTypes;
Tooltip.defaultProps = tooltipWrapperDefaultProps;

export default Tooltip;
