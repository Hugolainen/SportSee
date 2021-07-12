import {
    GET_USER,
    GET_USER_ACTIVITY,
    GET_USER_SESSIONS,
    GET_USER_PERFORMANCE,
  } from "./types";
  
import UserDataService from "../services/user.service";

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