import React, { useState, useEffect } from 'react';

const UseEffectWIthAsync = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start loading
        setLoading(true);

        // Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();

        // Update state with fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // End loading
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if necessary (e.g., canceling subscriptions)
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UseEffectWIthAsync;
