import API from "goals-todos-api";
import { toast } from "react-toastify";

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

/**
 * Toast notification
 * @param content {string} Text content the notification should display
 * @param type {string} The type of notification.  Accepts: "default", "success", "info", "warning", "error"
 * @param className {string} Container css class name
 * @param progressClassName {string} Progress bar css class name
 * @param autoClose {number} Time delay in ms before the toast closes
 */
export const handleNotification = (
  content,
  type = "default",
  className = "alert-primary",
  progressClassName = "bg-primary",
  autoClose = 1500
) => {
  toast(content, {
    type,
    className: `alert ${className}`,
    progressClassName,
    autoClose
  });
};