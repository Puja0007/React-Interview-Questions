import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello from setTimeout');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default MyComponent;
