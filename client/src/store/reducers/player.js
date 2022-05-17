import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/player';
// import { CubeColors, CubeNumbers } from '../../constans/constans';

const initialState = {
  login: null,
  personalGoal: null, // 1 or 2 or 3 ...
  // windowFrame: {
  //   color: [CubeColors.BLUE],
  // },
  // stainedGlass: {
  //     complexity: null,
  //     pattern: [
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //    ]
  //   },
  windowFrame: null,
  stainedGlass: null,
  numberPoints: null,
  privilegeСhips: null,
};

const player = createReducer(initialState, (builder) => {
  builder.addCase(actions.setLogin, (state, action) => {
    state.login = action.payload;
  });
  builder.addCase(actions.setPersonalGoal, (state, action) => {
    state.personalGoal = action.payload;
  });
  builder.addCase(actions.setWindowFrame, (state, action) => {
    state.windowFrame.color = action.payload;
  });
  builder.addCase(actions.setStainedGlass, (state, action) => {
    const { pattern, complexity } = action.payload;
    state.stainedGlass.complexity = complexity;
    state.stainedGlass.pattern = pattern;
  });
  builder.addCase(actions.setNumberPoints, (state, action) => {
    state.numberPoints = action.payload;
  });
  builder.addCase(actions.setPrivilegeСhips, (state, action) => {
    state.privilegeСhips = action.payload;
  });
  builder.addCase(actions.usePrivilegeСhips, (state, action) => {
    state.privilegeСhips -= action.payload;
  });
});

export default player;
