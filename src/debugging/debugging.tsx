import React, { useState } from 'react';

// Define a simple counter component
const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

  // Function to handle incrementing the count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

  // Function to handle decrementing the count
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};

// Define the App component
const App: React.FC = () => {
    return (
        <div>
        <h1>Debugging TypeScript/React</h1>
        <Counter />
        </div>
    );
};

export default App;