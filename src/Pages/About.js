import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <main>
        <h2>About page</h2>
        <p>Hello buddy!</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default About;
