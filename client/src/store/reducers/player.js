import { createReducer } from '@reduxjs/toolkit';
// import { CubeColors, CubeNumbers } from '../../constans/constans';

const initialState = {
  login: null,
  personalGoal: null, // 1 or 2 or 3 ...
  // windowFrames: {
  //   color: [CubeColors.BLUE],
  //   stainedGlass: {
  //     complexity: null,
  //     pattern: [
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //      [null, null, null, null, null],
  //    ]
  //   },
  // },
  windowFrame: null,
  numberPoints: null,
  privilegeСhips: null,
};

const player = createReducer(initialState, () => {});

export default player;
