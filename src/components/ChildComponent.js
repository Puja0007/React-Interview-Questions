import React from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} type="text" />
  );
});

export default ChildComponent;
