import {GET_TODOLIST_DATA} from "../actions/type";

export const todolistReducer=(state=[],action)=>{
switch(action.type)
{
    case GET_TODOLIST_DATA:
        return action.payload;
    default:
        return state;
}
}