import React, { useState, useMemo } from 'react';

const ExampleUseMemo = () => {
    const [count, setCount] = useState(0);

    // Expensive calculation function
    const computeExpensiveValue = (num) => {
        console.log('Computing expensive value...');
        // Simulating a time-consuming calculation
        for (let i = 0; i < 1000000000; i++) {
            // Do something
        }
        return num * 2;
    };

    // Memoized expensive calculation using useMemo
    const memoizedValue = useMemo(() => {
        return computeExpensiveValue(count);
    }, [count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>Count: {count}</p>
            <p>Memoized Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default ExampleUseMemo;
