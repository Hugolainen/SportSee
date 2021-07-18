import {
    GET_USER_PERFORMANCE,
} from "../actions/types";

const initialState = [];

/**
 * Updates the application's 'UserPerformance' state corresponding to dispatched action
 * @param   {state} user     
 * @param   {dispatch} action    
 * @return  {payload or initialState}       
*/
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