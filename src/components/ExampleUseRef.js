import React, { useEffect, useRef, useState } from "react";

const ExampleUseRef = () => {
  let [name, setName] = useState("");
  let [presentValue, setPresentValue] = useState(0);
  const inputRef = useRef();
  const previousValue = useRef();
  // useRef is used to store the previous value of the state.
  useEffect(() => {
    previousValue.current = presentValue;
  }, [presentValue]);

  // useRef is used to dom manipulation
  const handleClick = () => {
    setName(inputRef.current.value);
  };

  return (
    <>
      <h1>{name}</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
      <span> Present Value :{presentValue}</span>
      <span>Previous Value :{previousValue.current}</span>
      <button
        onClick={() => {
          setPresentValue(presentValue + 1);
        }}
      >
        GenerateValue
      </button>
    </>
  );
};

export default ExampleUseRef;
