import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tooltip from './tooltip';

const TooltipWrapper = props => {
  const { idProp, children, tooltipRender, defaultDisplay } = props;

  const [isDisplay, setIsDisplay] = useState(defaultDisplay);

  let domNode = document.getElementById(idProp);
  if (!domNode) {
    domNode = document.createElement('div');
    domNode.setAttribute('id', idProp);
    domNode.setAttribute('data-testid', idProp);
    domNode.setAttribute('key', idProp);
    document.body.appendChild(domNode);
  }

  const sourceRef = useRef(null);

  const showTooltip = () => {
    setIsDisplay(!defaultDisplay);
  };

  const hideTooltip = () => {
    setIsDisplay(defaultDisplay);
  };

  const renderToolTip = () => {
    if (!isDisplay) {
      return null;
    }

    const { left, top, width } = sourceRef.current.getBoundingClientRect();

    return ReactDOM.createPortal(
      <Tooltip
        tooltipRender={tooltipRender}
        targetDimLeft={left}
        targetDimTop={top}
        targetDimWidth={width}
      />,
      domNode,
    );
  };

  const tooltipWrapper = () => (
    <span
      key={idProp}
      idProp={idProp}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      ref={sourceRef}
      tabIndex="0"
      role="button"
      aria-describedby={`${idProp}-content`}
    >
      {children}
    </span>
  );

  useEffect(() => {
    renderToolTip();
  }, [isDisplay]);

  return [tooltipWrapper(), renderToolTip()];
};

TooltipWrapper.propTypes = {
  idProp: PropTypes.string,
  defaultDisplay: PropTypes.bool,
  children: PropTypes.node,
  tooltipRender: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

TooltipWrapper.defaultProps = {
  idProp: 'nuggie-tooltip-default',
  defaultDisplay: false,
  children: null,
  tooltipRender: null,
};

export default TooltipWrapper;
