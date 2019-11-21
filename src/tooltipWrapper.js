import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tooltip, {
  propTypes as tooltipPropTypes,
  defaultProps as tooltipDefaultProps,
} from './tooltip';

export const propTypes = {
  defaultDisplay: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  ...tooltipPropTypes,
};

export const defaultProps = {
  defaultDisplay: false,
  children: null,
  ...tooltipDefaultProps,
};

const TooltipWrapper = props => {
  const { tooltipId, children, tooltipRender, defaultDisplay, placement } = props;

  const sourceRef = useRef(null);

  const [isDisplay, setIsDisplay] = useState(defaultDisplay);
  const [domNode, setDomNode] = useState(null);

  useEffect(() => {
    setDomNode(document.getElementById(`${tooltipId}-tooltip-wrapper`));
  }, []);

  const showTooltip = () => {
    if (isDisplay !== !defaultDisplay) {
      setIsDisplay(!defaultDisplay);
    }
  };

  const hideTooltip = () => {
    if (isDisplay !== defaultDisplay) {
      setIsDisplay(defaultDisplay);
    }
  };

  const renderToolTip = () => {
    if (!isDisplay) {
      return null;
    }

    return ReactDOM.createPortal(
      <Tooltip tooltipRender={tooltipRender} sourceRef={sourceRef.current} placement={placement} onTooltipMouseOver={showTooltip} onTooltipMouseLeave={hideTooltip} />,
      domNode,
    );
  };

  return (
    <span key={`${tooltipId}-tooltip-wrapper`} id={`${tooltipId}-tooltip-wrapper`} className="tooltip-wrapper" >
      <span
        onMouseOver={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        ref={sourceRef}
        tabIndex="0"
        style={{ display: 'table-cell' }}
      >
        {children}
      </span>
      {renderToolTip()}
    </span>
  );
};

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;

export default TooltipWrapper;
