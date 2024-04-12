import React from 'react';
import { connect } from 'react-redux';

const MyComponent = ({ count, increment }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
