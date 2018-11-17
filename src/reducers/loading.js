import { RECEIVE_DATA } from "../actions/shared";

/**
 * Loading Reducer
 * @summary Reducer
 * @param state
 * @param action
 * @return {boolean}
 */
const loading = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
};

export default loading;
