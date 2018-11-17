import { combineReducers } from "redux";
import todos from "./todos";
import goals from "./goals";
import loading from "./loading";

/**
 * Root reducer
 * @summary Root Reducer
 * @parm todos
 * @param goals
 * @param loading
 */
export default combineReducers({
  //apply reducers
  todos,
  goals,
  loading
});
