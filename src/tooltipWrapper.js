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

  let domNode = document.getElementById(targetId);
  if (!domNode) {
    domNode = document.createElement('div');
    domNode.setAttribute('id', targetId);
    // domNode.setAttribute('data-testid', targetId);
    domNode.setAttribute('key', targetId);
    document.body.appendChild(domNode);
  }

  const sourceRef = useRef(null);

  const showTooltip = () => {
    setIsDisplay(!defaultDisplay);
  };

  const hideTooltip = () => {
    setIsDisplay(!defaultDisplay);
  };

  const renderToolTip = () => {
    if (!isDisplay || !sourceRef) {
      return null;
    }

    return ReactDOM.createPortal(
      <Tooltip tooltipRender={tooltipRender} sourceRef={sourceRef.current} placement={placement} />,
      domNode,
    );
  };

  const tooltipWrapper = () => (
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
    >
      {children}
    </span>
  );

  useEffect(() => {
    renderToolTip();
  }, [isDisplay]);

  return [tooltipWrapper(), renderToolTip()];
};

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;

export default TooltipWrapper;
