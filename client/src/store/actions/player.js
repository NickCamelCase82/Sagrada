import { createAction } from '@reduxjs/toolkit';

export const setLogin = createAction('user/login/set');
export const setPersonalGoal = createAction('user/personal_goal/set');
export const setWindowFrame = createAction('user/window_frame/set');
export const setStainedGlass = createAction('user/stained_glass/set');

export const setNumberPoints = createAction('user/number_points/set');

export const setPrivilegeСhips = createAction('user/privilege_chips/set');
export const useOffPrivilegeСhips = createAction('user/privilege_chips/use');
