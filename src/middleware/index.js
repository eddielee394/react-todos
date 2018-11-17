import checker from "./checker";
import logger from "./checker";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

/**
 * Middleware
 */
export default applyMiddleware(thunk, checker, logger);
