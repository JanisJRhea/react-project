import React, { useState, useEffect } from 'react';

const Change = () => {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    console.log('Component did mount or update');

    return () => {
      console.log('Component will unmount');
    };
  }, [message]);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Hello, React!')}>Update Message</button>
    </div>
  );
};

export default Change;

