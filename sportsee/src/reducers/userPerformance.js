import {
    GET_USER_PERFORMANCE,
} from "../actions/types";

const initialState = [];

function userReducer(userPerformance = initialState, action) {
const { type, payload } = action;

switch (type) {
    case GET_USER_PERFORMANCE:
        return payload;

    default:
        return userPerformance;
    }
};
  
  export default userReducer;