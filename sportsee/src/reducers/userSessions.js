import {
    GET_USER_SESSIONS,
} from "../actions/types";

const initialState = [];

function userReducer(userSessions = initialState, action) {
const { type, payload } = action;

switch (type) {
    case GET_USER_SESSIONS:
        return payload;

    default:
        return userSessions;
    }
};
  
  export default userReducer;