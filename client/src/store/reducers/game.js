import { createReducer } from '@reduxjs/toolkit';
import { CubeColors /* CubeNumbers */ } from '../../constans/constans';

const initialState = {
  round: {
    number: 1,
    cube: [],
  },
  cubes: [
    { color: [CubeColors.BLUE], count: 18 },
    { color: [CubeColors.GREEN], count: 18 },
    { color: [CubeColors.PURPLE], count: 18 },
    { color: [CubeColors.RED], count: 18 },
    { color: [CubeColors.YELLOW], count: 18 },
  ],
  commonGoals: [{}, {}, {}],
  droppedСubes: [
    // { color: [CubeColors.BLUE], number: 6 }
  ],
  // instruments: [{}, {}, {}],
};

const game = createReducer(initialState, () => {});

export default game;
