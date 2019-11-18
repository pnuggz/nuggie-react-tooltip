import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes, { node, string, oneOfType } from 'prop-types';

const Tooltip = props => {
  const [isDisplay, setIsDisplay] = useState(props.defaultDisplay || false);

  const id = props.id || 'nuggie-tooltip-default';
  const children = props.children || null;
  const render = props.render || null;

  let domNode = document.getElementById(id);
  if (!domNode) {
    domNode = document.createElement('div');
    domNode.setAttribute('id', id);
    domNode.setAttribute('key', id);
    document.body.appendChild(domNode);
  }

  useEffect(() => {
    renderToolTip();
  }, [isDisplay]);

  const handleMouseEnter = () => {
    setIsDisplay(!isDisplay);
  };

  const handleMouseLeave = () => {
    setIsDisplay(!isDisplay);
  };

  const handleFocus = () => {
    setIsDisplay(!isDisplay);
  };

  const handleBlur = () => {
    setIsDisplay(!isDisplay);
  };

  const renderToolTip = () => {
    if (!isDisplay) {
      return null;
    }

    return ReactDOM.createPortal(
      <h2 style={{ position: 'absolute', top: '50%', left: '50%' }}>{render}</h2>,
      domNode,
    );
  };

  const tooltipWrapper = () => {
    return (
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </span>
    );
  };

  return [tooltipWrapper(), renderToolTip()];
};

// Tooltip.propTypes = {
//   children: node.isRequired,
//   render: onOfType([node, string]).isRequired,
// };

export default Tooltip;
