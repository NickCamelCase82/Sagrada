import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/player';
// import { CubeColors, CubeNumbers } from '../../constans/constans';

const initialState = {
  login: null,
  personalGoal: null,
  // personalGoal: {
  //   id: null,
  //   color: null,
  //   title: null,
  //   text: null,
  //   src: null,
  // },
  windowFrame: null,
  // windowFrame: {
  //   id: null,
  //   src: null,
  // },
  stainedGlass: null,
  // stainedGlass: {
  //   id: null,
  //   title: null,
  //   complexity: null,
  //   pattern: [],
  //   src: null,
  // },
  numberPoints: null,
  privilegeСhips: null,
};

const player = createReducer(initialState, (builder) => {
  // action принимает payload с ником игрока
  builder.addCase(actions.setLogin, (state, action) => {
    state.login = action.payload;
  });
  // action принимает payload с объектом c ключами id и color title text src
  builder.addCase(actions.setPersonalGoal, (state, action) => {
    state.personalGoal = action.payload;
  });
  // action принимает payload с объектом c ключами id, color и src
  builder.addCase(actions.setWindowFrame, (state, action) => {
    state.windowFrame = action.payload;
  });
  // action принимает payload с объектом витража c ключами:
  // id
  // title
  // complexity (номер сложности),
  // pattern в виде двумерного массива
  // src с переменной в которой картинка
  builder.addCase(actions.setStainedGlass, (state, action) => {
    state.stainedGlass = action.payload;
  });
  // action принимает payload с количеством заработанных очков
  builder.addCase(actions.setNumberPoints, (state, action) => {
    state.numberPoints = action.payload;
  });
  // action принимает payload с числом фишек привелегий
  builder.addCase(actions.setPrivilegeСhips, (state, action) => {
    state.privilegeСhips = action.payload;
  });
  // action принимает payload с числом фишек привелегий которые были использованы
  builder.addCase(actions.usePrivilegeСhips, (state, action) => {
    state.privilegeСhips -= action.payload;
  });
  // action принимает payload с массивом,
  // где первый элемент - это номер вложенного массива шаблона
  // второй - элемент вложенного массива,
  // и третий - объект куба с ключами color и number
  builder.addCase(actions.addCubeToStainedGlass, (state, action) => {
    const cube = action.payload[3];
    const x = action.payload[1];
    const y = action.payload[0];
    state.stainedGlass.pattern[y][x] = cube;
  });
});

export default player;
