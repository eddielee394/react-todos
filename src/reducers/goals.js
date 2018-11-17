import { ADD_GOAL, REMOVE_GOAL } from "../actions/goals";
import { RECEIVE_DATA } from "../actions/shared";

/**
 * Goals Reducer
 * @summary Reducer
 * @param state
 * @param action
 * @return {*}
 */
const goals = (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals;
    default:
      return state;
  }
};

export default goals;
