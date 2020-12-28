import {combineReducers} from "redux";
import {todolistReducer} from "../reducers/index";
import {facebookGetDataReducer,githubGetDataReducer} from "../reducers/auth";

const reducers=combineReducers({todolist:todolistReducer,user:facebookGetDataReducer,githubGetDataReducer});

export default reducers;