import { createReducer } from '@reduxjs/toolkit';
import { CubeColors /* CubeNumbers */ } from '../../constans/constans';
import * as actions from '../actions/game';

const initialState = {
  round: {
    number: 1,
    cubes: [],
  },
  cubes: [
    { color: [CubeColors.BLUE], count: 18 },
    { color: [CubeColors.GREEN], count: 18 },
    { color: [CubeColors.PURPLE], count: 18 },
    { color: [CubeColors.RED], count: 18 },
    { color: [CubeColors.YELLOW], count: 18 },
  ],
  commonGoals: [],
  droppedСubes: [
    // { color: [CubeColors.BLUE], number: 6 }
  ],
  instruments: [],
};

const game = createReducer(initialState, (builder) => {
  // action принимает payload с объектом куба и ключами color и number
  builder.addCase(actions.upRound, (state, action) => {
    state.round.number += 1;
    state.round.cubes.push(action.payload);
  });
  // action принимает payload с массивом, элементы которого строка с названием цвета
  builder.addCase(actions.useCubes, (state, action) => {
    action.payload.forEach((payloadCube) => {
      state.cubes.forEach((stateCube) => {
        if (stateCube.color === payloadCube) {
          stateCube.count -= 1;
        }
      });
    });
  });
  // action принимает payload с массивом объектов кубов с ключами color и number
  builder.addCase(actions.setDroppedСubes, (state, action) => {
    action.payload.forEach((cube) => {
      state.droppedСubes.push(cube);
    });
  });
  // action принимает payload с массивом общих целей c ключами id и text
  builder.addCase(actions.setCommonGoals, (state, action) => {
    action.payload.forEach((goal) => {
      state.commonGoals.push(goal);
    });
  });
  // меняет состояние выпавших кубов на пустой массив
  builder.addCase(actions.deleteRemainingCubes, (state) => {
    state.droppedСubes = [];
  });

  // action принимает payload с массивом инструментов с ключами id и text
  builder.addCase(actions.setInstruments, (state, action) => {
    action.payload.forEach((instrument) => {
      state.instruments.push(instrument);
    });
  });
});

export default game;