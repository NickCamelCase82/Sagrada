import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import socket from '../../../features/socket';
import { loadLobby } from '../../../store/actions/lobby';
import Game from '../Game/Game';
import classes from './Players.module.css';
import axios from 'axios';
import { setstainedGlassForChoice } from '../../../store/actions/player';
import { setPlayers } from '../../../store/actions/game';

const Players = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const lobby = useSelector((state) => state.lobby);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log('params', params);
    dispatch(loadLobby(params.id));
    socket.join('lobby_' + params.id, (message) => {
      if (message.type === 'GAME_STARTED') {
        console.log(message);
        const { players, patternsForSelection } = message.data;
        dispatch(setstainedGlassForChoice(patternsForSelection[user.id]));
        dispatch(setPlayers(players));
        navigate('/game/' + params.id);
      }
      if (message.type === 'UPDATE_LOBBY') {
        if (message.initiator !== user.id) {
          dispatch(loadLobby(params.id));
        }
      }
    });
  }, []);

  if (!lobby.players) return <div>Not Found</div>;

  const handleCreateGame = async () => {
    const response = await axios.post(
      'http://localhost:3001/game/create/',
      {
        gameId: params.id,
      },
      {
        withCredentials: true,
      }
    );

    console.log('kjkjk', response.data);
  };

  return (
    <>
      <div className={classes.topnav}>
        <Link to="/">На главную</Link>
        <Link to="/logout">Выйти</Link>
        <p>id игры</p>
        <p>имя пользователя</p>
      </div>
      <ol className={classes.rounded}>
        {lobby.players.map((player) => (
          <li key={player.id}>
            <p>{player.login}</p>
          </li>
        ))}
      </ol>
      <div className={classes.btnDiv}>
        <button className={classes.btn} onClick={handleCreateGame}>
          <div>Начать игру</div>
        </button>
      </div>
    </>
  );
};

export default Players;
