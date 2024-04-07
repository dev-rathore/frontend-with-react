import * as React from 'react';
import './App.css';

const getRandomValue = () => Math.floor(Math.random() * 100);

function Foo() {
  return React.createElement(
    'h1',
    {
      style: {
        background: 'red',
      },
    },
    'Hello World Foo'
  );
}

function Test(
  
) {
  const value = getRandomValue();
  const valueRef = React.useRef(getRandomValue());
  const [svalue, _setSvalue] = React.useState(getRandomValue);

  const [_re, setRe] = React.useState(false);

  console.log('Value: ', value);
  console.log('Value Ref', valueRef.current);
  console.log('State Value', svalue);

  console.log('What Foo returns', Foo());

  return (
    <>
      <button onClick={() => setRe((re) => !re)}>re-render</button>
      <Foo />
    </>
  );
}

export default Test;
