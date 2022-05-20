import { createReducer } from '@reduxjs/toolkit';
import { CubeColors, CubeNumbers } from '../../constans/constans';
import * as actions from '../actions/game';

const initialState = {
  round: {
    number: 2,
    cubes: [
      {color: 'blue', number: 'one'},
    ],
  },
  cubes: [
    { color: CubeColors.BLUE, count: 18 },
    { color: CubeColors.GREEN, count: 18 },
    { color: CubeColors.PURPLE, count: 18 },
    { color: CubeColors.RED, count: 18 },
    { color: CubeColors.YELLOW, count: 18 },
  ],
  commonGoals: [],
  // droppedСubes: [
  //   // { color: [CubeColors.BLUE], number: CubeNumbers.SIX  }
  // ],
  droppedСubes: null,
  instruments: [],
  stainedGlass: [],
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
  // action принимает payload с массивом объектов кубов с ключами color и строку с номером
  builder.addCase(actions.setDroppedСubes, (state, action) => {
    // action.payload.forEach((cube) => {
    //   state.droppedСubes.push(cube);
    // });
    state.droppedСubes = action.payload
  });
  // action принимает payload с массивом общих целей c ключами id title text points src
  builder.addCase(actions.setCommonGoals, (state, action) => {
    state.commonGoals = action.payload;
  });
  // меняет состояние выпавших кубов на пустой массив
  builder.addCase(actions.deleteRemainingCubes, (state) => {
    state.droppedСubes = [];
  });

  // action принимает payload с массивом инструментов с ключами id
  // amountPrivilegeСhips (количество фишек привелегий на инструменте, изначально null) text src
  builder.addCase(actions.setInstruments, (state, action) => {
    action.payload.forEach((instrument) => {
      state.instruments.push(instrument);
    });
  });
  // action принимает payload с объектом id (id инструмента) и amount ()
  builder.addCase(actions.addPrivilegeСhipsOnInstruments, (state, action) => {
    const { id, amount } = action.payload;
    state.instruments.forEach((instrument) => {
      if (instrument.id === id) {
        instrument.amountPrivilegeСhips += amount;
      }
    });
  });
  // action принимает payload с объектом витража
  builder.addCase(actions.addStainedGlass, (state, action) => {
    state.stainedGlass.push(action.payload);
  });
});

export default game;
