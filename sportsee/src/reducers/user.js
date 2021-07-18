import {
    GET_USER,
} from "../actions/types";

const initialState = [];

/**
 * Updates the application's 'User' state corresponding to dispatched action
 * @param   {state} user     
 * @param   {dispatch} action    
 * @return  {payload}       
*/
function userReducer(user = initialState, action) {
const { type, payload } = action;

switch (type) {
    case GET_USER:
    return payload;
    
    default:
        return user;
    }
};
  
  export default userReducer;