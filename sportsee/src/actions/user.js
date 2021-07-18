import {
    GET_USER,
    GET_USER_ACTIVITY,
    GET_USER_SESSIONS,
    GET_USER_PERFORMANCE,
  } from "./types";
  
import UserDataService from "../services/user.service";

/**
 * Contains the action creators
 * This is creator for actions related to User. 
 * UserDataService is imported to make asynchronous HTTP requests with trigger dispatch on the result.
 */

/**
 * Makes async call to the UserDataService to GET User data and trigger a dispatch on the result
 * @param   {number} id     
*/
export const retrieveUser = (id) => async (dispatch) => {
    try {
        const res = await UserDataService.getUser(id);

        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

/**
 * Makes async call to the UserDataService to GET User's activity data and trigger a dispatch on the result
 * @param   {number} id     
*/
export const retrieveUserActivity = (id) => async (dispatch) => {
    try {
        const res = await UserDataService.getUserActivity(id);

        dispatch({
            type: GET_USER_ACTIVITY,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

/**
 * Makes async call to the UserDataService to GET User's sessions data and trigger a dispatch on the result
 * @param   {number} id     
*/
export const retrieveUserSessions = (id) => async (dispatch) => {
    try {
        const res = await UserDataService.getUserAverageSessions(id);

        dispatch({
            type: GET_USER_SESSIONS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

/**
 * Makes async call to the UserDataService to GET User's performance data and trigger a dispatch on the result
 * @param   {number} id     
*/
export const retrieveUserPerformance = (id) => async (dispatch) => {
    try {
        const res = await UserDataService.getUserPerformance(id);

        dispatch({
            type: GET_USER_PERFORMANCE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};