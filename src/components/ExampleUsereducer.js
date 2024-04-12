import React, { useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const ExampleUsereducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}

export default ExampleUsereducer;