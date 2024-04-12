import { useState, useEffect } from 'react';

const useId = () => {
  const [id, setId] = useState(null);

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  

  useEffect(() => {
    setId(generateUniqueId()); // Call some function to generate unique id
  }, []);

  return id;
};

export default useId;
