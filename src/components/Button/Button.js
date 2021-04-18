import React from 'react';

import './Button.scss';

const Button = ({ blue, text }) => {
  return (
    <button
      className={`Button ${blue ? 'Button_blue' : 'Button_orange'}`}>
        <span>{ text }</span>
    </button>
  );
};

export default Button;
