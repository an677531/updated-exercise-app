import React, { useState } from 'react';


const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
//functionality of the resetting the counter
  const resetCount = () => {
    setCount(0);
  };
//Creatning a structure for the displayed content within the counter
  return (
    <div className="counter">
      <h2>{name}</h2>
      <div className="counter-display">
        <p>{count}</p>
      </div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
