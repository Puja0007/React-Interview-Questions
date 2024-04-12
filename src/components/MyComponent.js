import React from 'react';
import useQuery from './useQuery';

const MyComponent = () => {
  const { data, loading } = useQuery('https://api.example.com/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render data */}
    </div>
  );
};

export default MyComponent;
