import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Registration from './components/Registration/Registration';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Game from './components/game/Game/Game';
import Main from './components/Main/Main';
import Rules from './components/GameRules/Rules';
import './App.css';
import Players from './components/game/Players/Players';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Lobbies from './components/Lobbies/Lobbies';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getUser = async () => {
    const response = await axios.get('http://localhost:3001/session', {
      withCredentials: 'include',
    });

    if (response.data) {
      dispatch({ type: 'SET_USER', payload: response.data });
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
    // fetch('http://localhost:3001/session', {
    //   credentials: 'include',
    // })
    //   .then((data) => data.json())
    //   .then((user) => {
    //     dispatch({ type: 'SET_USER', payload: user })
    //   });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Routes>
      <Route path="main" element={<Main />} />
      <Route path="rules" element={<Rules />} />
      <Route path="login" element={<Login />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="register" element={<Registration />} />
      <Route path="lobbies" element={<Lobbies />} />
      <Route path="lobby" element={<Players />}>
        <Route path="/lobby/:id" element={<Players />} />
      </Route>
      <Route path="game" element={<Game />}>
        <Route path="/game/:id" element={<Game />} />
      </Route>
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default App;
