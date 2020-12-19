import {combineReducers} from "redux";
import {songReducer,selectedSongReducer} from "../Reducers/index";


const reducers=combineReducers({s:songReducer,ss:selectedSongReducer});

export default reducers;