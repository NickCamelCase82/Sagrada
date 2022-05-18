import { createAction } from '@reduxjs/toolkit';

// добавить логин
export const setLogin = createAction('user/login/set');
// добавить персональную цель
export const setPersonalGoal = createAction('user/personal_goal/set');
// добавить планшет игрока
export const setWindowFrame = createAction('user/window_frame/set');
// добавить витраж
export const setStainedGlass = createAction('user/stained_glass/set');

// добавить заработанное количество очков
export const setNumberPoints = createAction('user/number_points/set');

// добавить нужное кол-во фишек привелегий
export const setPrivilegeСhips = createAction('user/privilege_chips/set');
// использовать нужное кол-во фишек привелегий
export const usePrivilegeСhips = createAction('user/privilege_chips/use');
// добавить кубик на витраж
export const addCubeToStainedGlass = createAction('game/cube/add');
