import { combineReducers } from "redux";
import themeReducer from "./themes";

export default combineReducers({
  theme: themeReducer,
});
