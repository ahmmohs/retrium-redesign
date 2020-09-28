import React from 'react';

function Button ({text, color, clickFn}) {
  return (
    <div className={`button button--${color}`} onClick={clickFn}>
      {text}
    </div>
  );
}

export default Button;