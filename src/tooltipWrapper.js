import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tooltip, {
  propTypes as tooltipPropTypes,
  defaultProps as tooltipDefaultProps,
} from './tooltip';

export const propTypes = {
  defaultDisplay: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  ...tooltipPropTypes,
};

export const defaultProps = {
  defaultDisplay: false,
  children: null,
  ...tooltipDefaultProps,
};

const TooltipWrapper = props => {
  const { targetId, children, tooltipRender, defaultDisplay, placement } = props;

  const [isDisplay, setIsDisplay] = useState(defaultDisplay);
  const [domNode, setDomNode] = useState(null);

  useEffect(() => {
    setDomNode(document.getElementById(targetId).parentNode);
  }, []);

  const sourceRef = useRef(null);

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
      <Tooltip tooltipRender={tooltipRender} sourceRef={sourceRef.current} placement={placement} />,
      domNode,
    );
  };

  return (
    <span className="tooltip-wrapper" key={`${targetId}-wrapper`}>
      <span
        key={targetId}
        id={targetId}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        ref={sourceRef}
        tabIndex="0"
        role="button"
        aria-describedby={`${targetId}-content`}
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
