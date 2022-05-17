import { createAction } from '@reduxjs/toolkit';

export const upRound = createAction('game/round/up');
export const useCubes = createAction('game/cubes/use');
export const setDroppedСubes = createAction('game/dropped_cubes/set');
export const setCommonGoals = createAction('game/common_goals/set');
