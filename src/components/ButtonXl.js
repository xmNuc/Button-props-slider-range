import React from 'react';
import { Button } from './Button';

export const ButtonXl = (props) => {
  console.log(props.currVal);

  return (
    <Button>
      <div style={{ padding: Number(props.currVal) }}>{props.children}</div>
    </Button>
  );
};
