import React from 'react';
import Counter from './counter'; //inlcuding the counter component
//Including the outer structure that can work for any repetition based exercise and pulling the contents of the counter.
const RepetitionExercise = () => {
  return (
    <div className="repetition-exercise">
      <h2>Repetition Exercise</h2>
      <Counter name="Push-ups" />
    </div>
  );
};

export default RepetitionExercise;
