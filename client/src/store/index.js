import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import game from './reducers/game';
import player from './reducers/player';

const store = configureStore({
  reducer: combineReducers({ game, player }),
});

export default store;
