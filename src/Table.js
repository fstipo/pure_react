import React from 'react';
import Data from './Data';

const Table = () => {
  return (
    <table border="1">
      <tbody>
        <tr>
          <Data>Element 1</Data>
          <Data>Element 2</Data>
          <Data>Element 3</Data>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
