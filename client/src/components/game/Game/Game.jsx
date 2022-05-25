import React, { useEffect } from 'react';
import './Game.css';
// import img from '../../../img/background.png';
import Counter from '../Counter/Counter';
import { Link, useParams } from 'react-router-dom';
import GoalAndToolButtons from '../GoalAndToolButtons/GoalAndToolButtons';
// import ButtonCommonGoals from '../GoalAndToolButtons/ButtonCommonGoals/ButtonCommonGoals';
// import ButtonPersonalGoal from '../GoalAndToolButtons/ButtonPersonalGoal/ButtonPersonalGoal';
import ChoiceStainedGlass from '../playersZone/ChoiceStainedGlass/ChoiceStainedGlass';
import { useDispatch, useSelector } from 'react-redux';
import RollDiceBtn from '../RollDiceBtn/RollDiceBtn';
import PlayerZone from '../playersZone/PlayerZone/PlayerZone';
import { io } from 'socket.io-client';
import socket from '../../../features/socket';
import {
  addPatternsToPlayers,
  setPlayers,
  setRounds,
  setDroppedСubes,
  setActivePlayer,
  setPlayerPattern,
} from '../../../store/actions/game';
import {
  resetRaisedCube,
  setCurrentPlayerPattern,
} from '../../../store/actions/player';
import ActivePlayerCaption from './ActivePlayerCaption/ActivePlayerCaption';

const Game = () => {
  const stateStainedGlass = useSelector((state) => state.player.stainedGlass);
  const login = useSelector((state) => state.player.login);
  const params = useParams();
  const lobby = useSelector((state) => state.lobby);
  const user = useSelector((state) => state.user);
  const gamePlayers = useSelector((state) => state.game.players);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.join('game_' + params.id, (message) => {
      if (message.type === 'PLAYERS_SELECTED_PATTERNS') {
        console.log(message);
        if (gamePlayers) {
          dispatch(
            setPlayers(
              message.data.players
                .filter((player) => player.id !== user.id)
                .map((player) => {
                  return {
                    ...player,
                    pattern: message.data.patterns[player.id],
                  };
                })
            )
          );
        }
        dispatch(setRounds(message.data.rounds));
        dispatch(setDroppedСubes(message.data.reserve));
        dispatch(setActivePlayer(message.data.activePlayer));
      }
      if (message.type === 'PUT_CUBE_FOR_STAINED_GLASS') {
        const { pattern, activePlayer, reserve, rounds } = message.data;
        const player = message.initiator;
        console.log(message);
        if (player === user.id) {
          dispatch(setCurrentPlayerPattern(pattern));
          dispatch(resetRaisedCube());
        } else {
          dispatch(setPlayerPattern({ player, pattern }));
        }

        dispatch(setActivePlayer(activePlayer));
        dispatch(setDroppedСubes(reserve));
        dispatch(setRounds(rounds));
      }
    });
  }, []);

  return (
    <>
      <div className="game-page">
        <div className="game-img-div">
          {/* <img src={img} alt="sagrada-img" className={classes.gameImg} /> */}
          <div className="nav">
            <Link to="/">Выйти из игры</Link>
            <p>{lobby ? `Игра: ${lobby.id}` : 'id игры'}</p>
            <p>{user.login}</p>
          </div>
          <Counter />
          {/* <ButtonCommonGoals />
          <ButtonPersonalGoal /> */}
          <GoalAndToolButtons />
          {/* <ActivePlayerCaption /> */}
          <RollDiceBtn />
          {!stateStainedGlass ? <ChoiceStainedGlass /> : <PlayerZone />}
        </div>
      </div>
    </>
  );
};

export default Game;
