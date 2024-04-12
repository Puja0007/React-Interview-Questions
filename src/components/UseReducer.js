import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Initial state
const initialState = { count: 0 };

const init = (initialCount) => {
    return { count: initialCount };
  };

// Component using useReducer
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState,init);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
