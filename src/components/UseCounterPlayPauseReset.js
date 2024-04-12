import React, { useState, useEffect } from 'react';

// Custom hook to provide counter functionality
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const reset = () => setCount(initialValue);

  return { count, play, pause, reset };
}

// Counter component
function Counter() {
  const { count, play, pause, reset } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
