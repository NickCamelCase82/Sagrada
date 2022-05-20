import { createAction } from '@reduxjs/toolkit';

// Повысить уровень на 1 и добавить кубик на счетчик раундов
export const upRound = createAction('game/round/up');
// Удалить из общего запаса кубов те кубики, которые выпали в раунд
export const removeCubes = createAction('game/cubes/remove');
// Добавить кубы, которые выпали в игровую зону
export const setDroppedСubes = createAction('game/dropped_cubes/set');
// Заполнить игру общими целями
export const setCommonGoals = createAction('game/common_goals/set');
// Удалить оставшиеся выпавшие кубы из игры (после добавлления куба на счетчик раундов)
export const deleteRemainingCubes = createAction('game/remaining_cubes/delete');
// Заполнить игру инструментами
export const setInstruments = createAction('game/instruments/set');
// Положить нужное кол-во фишек привелегий на инструмент
export const addPrivilegeСhipsOnInstruments = createAction(
  'game/privilege_chips/add'
);
