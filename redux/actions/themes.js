import { SET_THEME } from "../constants";

export const setTheme = (theme) => {
  return { type: SET_THEME, data: theme };
};
