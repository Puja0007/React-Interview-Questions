import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const childRef = useRef(null);

  const focusInput = () => {
    childRef.current.focus();
  };

  const blurInput = () => {
    childRef.current.blur();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={blurInput}>Blur Input</button>
    </div>
  );
};

export default ParentComponent;
