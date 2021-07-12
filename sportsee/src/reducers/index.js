import { combineReducers } from "redux";
import user from "./user";
import userActivity from "./userActivity";
import userSessions from "./userSessions";
import userPerformance from "./userPerformance";

export default combineReducers({
    user,
    userActivity,
    userSessions,
    userPerformance
});