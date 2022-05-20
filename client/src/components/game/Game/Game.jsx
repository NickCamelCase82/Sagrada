import React from 'react';
import classes from './Game.module.css';
// import img from '../../../img/background.png';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import GoalAndToolButtons from '../GoalAndToolButtons/GoalAndToolButtons';
// import ButtonCommonGoals from '../GoalAndToolButtons/ButtonCommonGoals/ButtonCommonGoals';
// import ButtonPersonalGoal from '../GoalAndToolButtons/ButtonPersonalGoal/ButtonPersonalGoal';
import ChoiceStainedGlass from '../playersZone/ChoiceStainedGlass/ChoiceStainedGlass';

const Game = () => {
  return (
    <>
      <div className={classes.gamePage}>
        <div className={classes.gameImgDiv}>
          {/* <img src={img} alt="sagrada-img" className={classes.gameImg} /> */}
          <Link to="/">На главную</Link>
          <Counter />
          {/* <ButtonCommonGoals />
          <ButtonPersonalGoal /> */}
          <GoalAndToolButtons />
          <ChoiceStainedGlass />
        </div>
      </div>
    </>
  );
};

export default Game;
