import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-345678-910</li>
      </ul>
      <div>Newline Test</div>
      <div>Empty Newlines Here</div>
      <div>&nbsp;Non-breaking &nbsp;Space&nbsp;</div>
      <div>Line1 Line2</div>
      <div>Line1 Line2</div>
    </div>
  );
};

ReactDOM.render(<MyComponent />, document.querySelector('#root'));
