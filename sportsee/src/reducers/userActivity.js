import {
    GET_USER_ACTIVITY,
} from "../actions/types";

const initialState = [];

function userReducer(userActivity = initialState, action) {
const { type, payload } = action;

switch (type) {
    case GET_USER_ACTIVITY:
        return payload;

    default:
        return userActivity;
    }
};
  
  export default userReducer;