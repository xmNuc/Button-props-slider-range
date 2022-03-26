import React from 'react';
import './Button.css';

export const Button = (props) => {
  return (
    <>
      <div className="Wrap">
        <button className="First-btn btn-grad">{props.children}</button>
      </div>
    </>
  );
};
