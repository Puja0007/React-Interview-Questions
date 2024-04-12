import { useState, useEffect } from 'react';

const useQuery = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function if necessary
    return () => {
      // Cleanup code
    };
  }, [url]);

  return { data, loading };
};

export default useQuery;
