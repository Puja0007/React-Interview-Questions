import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default MyComponent;
