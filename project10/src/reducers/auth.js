import {FETCH_AUTH_DATA} from "../actions/type";
export const userFetchDataReducer=(state={},action)=>{
    switch(action.type)
    {
        case FETCH_AUTH_DATA:
            return {...state,user:action.payload};
        default:
            return state;
    }
};