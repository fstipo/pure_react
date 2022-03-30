import React from 'react';

const Gretting = () => {
  let username = 'Bob';
  //username = undefined;
  //username = null;
  //username = false;

  // first version
  //   return <div>{username ? `Hello ${username}` : 'Not logged in!'}</div>;
  return (
    <div>
      {/* second version */}
      {username && `Hello ${username}`}
      {!username && 'Not logged in!'}
    </div>
  );
};

export default Gretting;
