import React from 'react';
import classes from './Game.module.css';
// import img from '../../../img/background.png';
import Counter from '../Counter/Counter';
// import Dice from '../Dice/Dice';
import CommonGoalCards from '../CommonGoalCards/CommonGoalCards';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <>
      <div className={classes.gamePage}>
        <div className={classes.gameImgDiv}>
          {/* <img src={img} alt="sagrada-img" className={classes.gameImg} /> */}
          <Link to="/">На главную</Link>
          <Counter />
          <CommonGoalCards />
        </div>
      </div>
    </>
  );
};

export default Game;
