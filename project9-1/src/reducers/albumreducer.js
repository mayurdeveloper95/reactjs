import {ALBUMS} from "../actions/type";

export const albumReducer=(state=[],action)=>{
switch(action.type)
{
    case ALBUMS:
        return action.payload
    default:
        return state;
}
}