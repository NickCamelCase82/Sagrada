import React, { useEffect } from 'react';
import classes from './Game.module.css';
// import img from '../../../img/background.png';
import Counter from '../Counter/Counter';
import { Link, useParams } from 'react-router-dom';
import GoalAndToolButtons from '../GoalAndToolButtons/GoalAndToolButtons';
// import ButtonCommonGoals from '../GoalAndToolButtons/ButtonCommonGoals/ButtonCommonGoals';
// import ButtonPersonalGoal from '../GoalAndToolButtons/ButtonPersonalGoal/ButtonPersonalGoal';
import ChoiceStainedGlass from '../playersZone/ChoiceStainedGlass/ChoiceStainedGlass';
import { useSelector } from 'react-redux';
import RollDiceBtn from '../RollDiceBtn/RollDiceBtn';
import PlayerZone from '../playersZone/PlayerZone/PlayerZone';
import { io } from 'socket.io-client';

const Game = () => {
  const stateStainedGlass = useSelector((state) => state.player.stainedGlass);
  const login = useSelector((state) => state.player.login);
  const params = useParams();

  // useEffect(() => {
  //   const socket = io('ws://localhost:3001');
  //   console.log(params);
  //   if (params.id) {
  //     console.log('CONNECT SOCKET ROOM');
  //     socket.on(`${params.id}_play_${login}`, (data) => {
  //       console.log(data);
  //     });
  //   }
  // }, []);

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
          <RollDiceBtn />
          {!stateStainedGlass ? <ChoiceStainedGlass /> : <PlayerZone />}
        </div>
      </div>
    </>
  );
};

export default Game;
