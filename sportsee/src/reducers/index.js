import { combineReducers } from "redux";
import user from "./user";
import userActivity from "./userActivity";
import userSessions from "./userSessions";
import userPerformance from "./userPerformance";

/**
 * Combine all given reducers into a single one
 */
export default combineReducers({
    user,
    userActivity,
    userSessions,
    userPerformance
});