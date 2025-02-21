import React from 'react';
import Adder from './adder.js';
const AmountTracker = () => {
    return (
      //Making a component based on counted index structure with slight tweaks
        <div className="amount-tracker">
          <h2>Manual Step Exercise</h2>
          <Adder name="Total Steps" />
        </div>
      );
    };

  export default AmountTracker;
