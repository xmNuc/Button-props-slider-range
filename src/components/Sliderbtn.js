import React, { useState } from 'react';
import { ButtonXl } from './ButtonXl';
import { Button } from './Button';

export const Slider = (props) => {
  const [currVal, setCurrVal] = useState(15);

  const handleChange = (e) => {
    setCurrVal(e.target.value);
  };

  return (
    <>
      <div className="Slider">
        <input type="range" min="0" max="60" step="1" value={currVal} onChange={handleChange} />
      </div>
      <div className="Slider">Padding:{Number(currVal) + 10}</div>

      <ButtonXl children={props.children} currVal={currVal} />
    </>
  );
};
