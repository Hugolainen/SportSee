import {
    GET_USER_ACTIVITY,
} from "../actions/types";

const initialState = [];

/**
 * Updates the application's 'UserActivity' state corresponding to dispatched action
 * @param   {state} user     
 * @param   {dispatch} action    
 * @return  {payload or initialState}       
*/
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