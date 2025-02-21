import './App.css'; //Including some basic styling
import React, { useState } from 'react';
import Menu from './components/Exercise-Menu/index'; // Import Menu component
import DurationExercise from './components/Duration-Exercise/index'; // Import DurationExercise screen
import RepetitionExercise from './components/Repetition-Exercise/index';//Import Exerccise Repetition screen
import AmountTracker from './components/Amount-Exercise/index';//Import Ammount Exercise Counter

const App = () => {
  const [exerciseType, setExerciseType] = useState(null);

  //creating a way to change exercise type to ensure that proper screen may be displayed
  const handleExerciseClick = (type) => {
    setExerciseType(type);
  };

  //set exercise type to null to bring back the menu screen
  const goBackToMenu = () => {
    setExerciseType(null);
  };
//creating the interface component that stay the same on all screen like the bar at the top
  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-Bar">
          <p> </p>
          <p>9:41</p>
          <div></div>
        </div>
        {/*showing the menu screen when no exercise is selected*/}
        {exerciseType === null ? (
          <Menu onExerciseSelect={handleExerciseClick} />
        ) : (
          //creating working back to menu button and creating working functionalities which allow for displaying of the exercise screens
          <div className="exercise-screen">
            <button onClick={goBackToMenu}>Back to Menu</button>
            {exerciseType === 'repetition' && <RepetitionExercise />}
            {exerciseType === 'duration' && <DurationExercise />}
            {exerciseType === 'amount' && <AmountTracker />}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;


