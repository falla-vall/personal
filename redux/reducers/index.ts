import { combineReducers } from "redux";
import themeReducer from "./themes";
import userReducer from "./user";

export default combineReducers({
  theme: themeReducer,
  userData: userReducer,
});
