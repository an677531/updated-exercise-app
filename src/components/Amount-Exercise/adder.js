import React, { useState } from 'react';

//Handling logic for taking in input, making sure its an interger, and putting it into displayed total steps, and resetting it upon hitting the button.
const Adder = ({ name }) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
//On detected input this ensure that state variable is updated with the current value from input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addCount = () => {
    const steps = Number(inputValue); //
    //Logic ensuring that no string is added to the number
    if (!isNaN(steps)) {
      setCount(count + steps);
    } else {
      //Adding an error handling just in case if somehow user inputs not a number
      console.error("Input is not a number");
    }
  };
//Resetting counter
  const resetCount = () => {
    setCount(0);
  };
//This is the main structre similar to rep based exercise with additional input field for user to enter number of steps to add to step total
//Field is limted to only number input and displays nice messege saying to input number
  return (
    <div className="counter">
      <h2>{name}</h2>
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter number of steps"
      />
      <br></br>
      <button onClick={addCount}>Add Steps</button>
      <button onClick={resetCount}>Reset Steps</button>
    </div>
  );
};

export default Adder;
