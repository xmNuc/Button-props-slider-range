import React, { useState } from 'react';
import { ButtonXl } from './ButtonXl';
import { Button } from './Button';

export const Slider = (props) => {
  const [currVal, setCurrVal] = useState(15);

  // console.log(currVal);
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

// import React, { useState } from 'react';
// import './Button.css';

// export const Button = (props) => {
//   const [currVal, setCurrVal] = useState(15);

//   console.log(currVal);
//   const handleChange = (e) => {
//     setCurrVal(e.target.value);
//   };
//   return (
//     <>
//       <div className="Wrap">
//         <button className="btn-grad" style={{ padding: props.padding }}>
//           {props.children}
//         </button>
//       </div>
//       <div>
//         <input type="range" min="0" max="30" step="1" value={currVal} onChange={handleChange} />
//       </div>
//     </>
//   );
// };

// import React, { useState } from 'react';
// import { Button } from './Button';

// export const ButtonXl = (props) => {
//   const [currVal, setCurrVal] = useState(15);

//   console.log(currVal);
//   const handleChange = (e) => {
//     setCurrVal(e.target.value);
//   };

//   return (
//     <Button padding={props.padding}>
//       {props.children}
//       <div>
//         <input type="range" min="0" max="30" step="1" value={currVal} onChange={handleChange} />
//       </div>
//     </Button>
//   );
// };
