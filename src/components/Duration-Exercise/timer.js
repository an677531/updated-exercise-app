import React, { useState, useEffect } from 'react';

const Timer = ({ isRunning, resetTrigger }) => {
  const [time, setTime] = useState(0);
//The timer will run when is running is true and stop when false.
  useEffect(() => {
    let interval;
    //Whenever the time is start it begins increasing the values on timer
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  //This is a way to change resetTrigger and cause time reset
  useEffect(() => {
    setTime(0);
  }, [resetTrigger]);
//Dealing with propper time formatting that meets the class specks... for future challange can add miliseconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return <h1>{formatTime(time)}</h1>;
};

export default Timer;
