import {FETCH_DATA } from "../actions/type";

export const fetchDataReducer=(state=null,action)=>{
    switch(action.type)
    {
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
}
