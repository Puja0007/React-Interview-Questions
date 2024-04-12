import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

const App = () => {
  // Clone MyComponent and add a new prop
  const clonedElement = React.cloneElement(<MyComponent />, { color: 'red' });

  return (
    <div>
      {clonedElement}
    </div>
  );
};

export default App;
