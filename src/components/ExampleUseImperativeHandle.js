import React, { useRef, useImperativeHandle } from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    // You can expose more methods or properties here
  }));

  return (
    <input ref={inputRef} type="text" />
  );
});

export default ChildComponent;
