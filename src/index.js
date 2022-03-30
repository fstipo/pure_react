import React from 'react';
import ReactDOM from 'react-dom';

// const HelloWorld = () => {
//   return <div>Hello World</div>;
// };
const Hello = () => {
  return <span>Hello </span>;
};

const Franko = () => {
  return <span>Franko</span>;
};

const HelloWorld = () => {
  return (
    <>
      <Hello />
      <Franko />
    </>
  );
};

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
