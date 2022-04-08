import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const runInitial = () => {
  console.log('We are the crow!');
  return 4;
};
const Home = () => {
  const [count, setCount] = useState(() => {
    console.log('This is best way!');
    return 10;
  });
  const decrementCount = () => setCount((prevCount) => prevCount - 1);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <main className="text-center py-5">
        <h2>Home page</h2>
        <p>You are the best</p>
        <div className="display-4">
          <button className="btn  btn-danger fw-bold" onClick={decrementCount}>
            -
          </button>
          <span className="px-4">{count}</span>
          <button className="btn btn-primary fw-bold" onClick={incrementCount}>
            +
          </button>
        </div>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Home;
