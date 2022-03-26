import React from 'react';
import { Button } from './components/Button';
import { Slider } from './components/Sliderbtn';

function App() {
  return (
    <div className="App">
      <Button padding={8}>First Button</Button>
      <Slider>Button XL</Slider>
    </div>
  );
}

export default App;
