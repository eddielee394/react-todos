import API from "goals-todos-api";

/**
 * Global Constants
 * @type {string}
 * @constant
 */
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

/**
 * Adds Goal
 * @summary Action
 * @param goal
 * @return {{type: string, goal: *}}
 */
const addGoal = goal => {
  return {
    type: ADD_GOAL,
    goal
  };
};

/**
 * Removes goal
 * @summary Action
 * @param id
 * @return {{type: string, id: *}}
 */
const removeGoal = id => {
  return {
    type: REMOVE_GOAL,
    id
  };
};

/**
 * Add Goal Handler
 * @summary Action Creator
 * @param name
 * @param callback
 * @return {const(*): Promise<T | never>}
 * @async
 */
export const handleAddGoal = (name, callback) => dispatch => {
  //pass the input value to get the item from the api
  return (
    API.saveGoal(name)
      //then pass the item object
      .then(goal => {
        //update the store with the object using dispatch()
        dispatch(addGoal(goal));
        //run the callback const
        callback();
        //if there's an error
      })
      .catch(() => {
        //alert the user
        alert("There was an error.  Try again");
      })
  );
};

/**
 * Delete Goal Handler
 * @summary Action Creator
 * @param goal
 * @return {const(*): Promise<T | never>}
 * @async
 */
export const handleDeleteGoal = goal => dispatch => {
  //update the store
  dispatch(removeGoal(goal));
  //return the api
  return API.deleteGoal(goal.id).catch(() => {
    //if error, add the item back & display alert
    dispatch(addGoal(goal));
    alert("There was an error removing your item. Please try again.");
  });
};
