import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Game from './components/Game/Game';
import Main from './components/Main/Main';
import Rules from './components/GameRules/Rules';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="main" element={<Main />} />
      <Route path="rules" element={<Rules />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route path="game" element={<Game />} />
    </Routes>
  );
}

export default App;
