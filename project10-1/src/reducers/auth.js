import {FETCH_AUTH_DATA,FETCH_AUTH_DATA_GITHUB} from "../actions/type";
export const facebookGetDataReducer=(state={},action)=>{
    switch(action.type)
    {
        case FETCH_AUTH_DATA:
            return {...state,user:action.payload};
        default:
            return state;
    }       
}


export const githubGetDataReducer=(state={},action)=>{
    switch(action.type)
    {
        case FETCH_AUTH_DATA_GITHUB:
            return {...state,user:action.payload};
        default:
            return state;
    }       
}