import React, { useState } from 'react';

// Toggle component using Render Props pattern
const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  return children({ on, toggle });
};

// Usage of Toggle component
const App = () => (
  <div>
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button onClick={toggle}>
            {on ? 'Turn Off' : 'Turn On'}
          </button>
          {on && <p>The toggle is on!</p>}
        </div>
      )}
    </Toggle>
  </div>
);

export default App;
