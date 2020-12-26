import {combineReducers} from "redux";
import {fetchDataReducer} from "../reducers/index";
import {userFetchDataReducer} from "../reducers/auth";

const reducers=combineReducers({data:fetchDataReducer,user:userFetchDataReducer});

export default reducers;