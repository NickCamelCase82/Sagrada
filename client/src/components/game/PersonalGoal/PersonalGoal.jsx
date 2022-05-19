import React from 'react';
import { useSelector } from 'react-redux';
import './PersonalGoal.css';

const PersonalGoal = () => {
  const statePersonalGoal = useSelector((state) => state.player.personalGoal);
  return (
    <div className="container-personal-goal">
      <img
        className="img-personal-goal"
        src={statePersonalGoal.src}
        alt={statePersonalGoal.title}
      />
      <div className="title-personal-goal">{statePersonalGoal.title}</div>
      <div>{statePersonalGoal.description}</div>
    </div>
  );
};
export default PersonalGoal;
