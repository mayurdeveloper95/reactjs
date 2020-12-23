import {PICTURES} from "../actions/type";

export const photoReducer=(state=[],action)=>{
switch(action.type)
{
    case PICTURES:
        return [...state,action.payload]
    default:
        return state;
}
}