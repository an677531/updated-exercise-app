import React from 'react';

const Menu = ({ onExerciseSelect }) => {
  //Creating the basic setup that makes up the menu which allows access to the exercises
  return (
    <div className="menu">
      <h1>Exercise Tracker</h1>
      <ul>
        <li><button onClick={() => onExerciseSelect('repetition')}>Repetition Exercise</button></li>
        <li><button onClick={() => onExerciseSelect('duration')}>Duration Exercise</button></li>
        <li><button onClick={() => onExerciseSelect('amount')}>Amount Tracker</button></li>
        <li><button>Future Exercise</button></li>
        <li><button>Future Exercise</button></li>
        <li><button>Future Exercise</button></li>
      </ul>
    </div>
  );
};

export default Menu;
