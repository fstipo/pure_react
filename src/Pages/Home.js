import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
    <>
      <main>
        <h2>Home page</h2>
        <p>You are the best</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Home;
