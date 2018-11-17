import API from "goals-todos-api";

/**
 * Global Constants
 * @type {string}
 * @constant
 */
export const RECEIVE_DATA = "RECEIVE_DATA";

/**
 * Receives Data
 * @summary Action
 * @param todos
 * @param goals
 * @return {{type: string, todos: *, goals: *}}
 */
const receiveData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
};

/**
 * Initial Data Handler
 * @summary Action Creator
 * @async
 * @return {function(*): Promise<any[] | never>}
 */
export const handleInitialData = () => dispatch => {
  return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
    ([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    }
  );
};
