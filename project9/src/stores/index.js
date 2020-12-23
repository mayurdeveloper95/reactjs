import {combineReducers} from "redux";
import {userListReducer} from "../reducers/userlistreducers";
import {userPostReducer} from "../reducers/userpostreducer";

const reducers=combineReducers({post:userPostReducer,user:userListReducer});

export default reducers;