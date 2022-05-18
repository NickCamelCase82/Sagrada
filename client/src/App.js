import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Game from './components/Game/Game';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      {/* <Main /> */}
      {/* <Login />
      <Registration />
      <Game /> */}
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
