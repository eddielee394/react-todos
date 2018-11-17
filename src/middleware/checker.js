import { ADD_GOAL } from "../actions/goals";
import { ADD_TODO } from "../actions/todos";

/**
 * Checks the action type and returns a notification.
 * @summary middlware
 * @param store
 * @return {function(*): function(*=): *}
 */
const checker = store => next => action => {
  // if (action.type === ADD_TODO) {
  //   let alertText = `Don't forget to ${action.todo.name}`;
  //   alert(alertText);
  // }
  //
  // if (action.type === ADD_GOAL) {
  //   let alertText = "That's a great goal!";
  //   alert(alertText);
  // }

  //otherweise move to the next action
  return next(action);
};

export default checker;
