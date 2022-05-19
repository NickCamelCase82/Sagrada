import React from 'react';
import classes from './Game.module.css';
// import img from '../../../img/background.png';
import Counter from '../Counter/Counter';
// import Dice from '../Dice/Dice';
import { Link } from 'react-router-dom';
import ButtonCommonGoals from '../ButtonCommonGoals/ButtonCommonGoals';

const Game = () => {
  return (
    <>
      <div className={classes.gamePage}>
        <div className={classes.gameImgDiv}>
          {/* <img src={img} alt="sagrada-img" className={classes.gameImg} /> */}
          <Link to="/">На главную</Link>
          <Counter />
          <ButtonCommonGoals />
        </div>
      </div>
    </>
  );
};

export default Game;
