import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Game from './components/Game/Game/Game';
import Main from './components/Main/Main';
import Rules from './components/GameRules/Rules';
import './App.css';

// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

const App = () => (
  <Routes>
    <Route path="main" element={<Main />} />
    <Route path="rules" element={<Rules />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Registration />} />
    <Route path="game" element={<Game />} />
    <Route path="/" element={<Navigate to="/main" />} />
  </Routes>
);

export default App;
