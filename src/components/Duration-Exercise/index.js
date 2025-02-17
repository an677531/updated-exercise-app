import React, { useState } from 'react';
import Timer from './timer';

const DurationExercise = () => {
  const [isRunning, setIsRunning] = useState(false); //Settting up the default state of the running check to false so the timer does not start as soon as the page loads
  const [resetTrigger, setResetTrigger] = useState(0); //Setting up a default state of the trigger for the reset

  const toggleTimer = () => {
    setIsRunning(prevState => !prevState);//reversing the previous state of running checker to either stop it or start it
  };

  const resetTimer = () => {
    setIsRunning(false); //stopping the timer
    setResetTrigger(prev => prev + 1); //Changing the resetTrigger state in order to reset the timer
  };
//Display
  return (
    <div className="duration-exercise">
      <h2>Duration Exercise</h2>
      <Timer isRunning={isRunning} resetTrigger={resetTrigger} />
      <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default DurationExercise;
