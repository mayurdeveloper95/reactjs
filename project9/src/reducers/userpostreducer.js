import { USERS_POST } from "../actions/type";

export const userPostReducer=(state=[],action)=>{
    switch(action.type)
    {
        case USERS_POST:
            return action.payload;
        default:
            return state;
    }
}
