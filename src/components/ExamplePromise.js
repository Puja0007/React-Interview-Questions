import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ message: 'Data fetched successfully' });
        }, 2000);
      });
    };

    fetchData().then((result) => {
      setData(result);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      {/* Render fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
