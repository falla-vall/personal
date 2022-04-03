import { SET_THEME } from "../constants";

interface ACTION {
  type: string;
  data: string;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const reducer = (state = getInitialTheme(), action: ACTION) => {
  switch (action.type) {
    case SET_THEME:
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("theme", action.data);
      }
      return action.data;
    default:
      return state;
  }
};

export default reducer;
