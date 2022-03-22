import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        const incrementCount = count + 1;
        setCount(incrementCount);
        // setCount((oldCount) => oldCount + 1);
    }

    function decrementCount() {
        setCount((oldCount) => oldCount - 1);
    }

    return (
        <>
            <h1>Compteur: {count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
}