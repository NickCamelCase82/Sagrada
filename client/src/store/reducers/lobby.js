import { createReducer } from '@reduxjs/toolkit';
import { setLobby } from '../actions/lobby';

const initialState = {};

export const lobbyReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLobby, (state, { payload }) => payload);
});
