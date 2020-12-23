import {combineReducers} from "redux";
import {albumReducer} from "../reducers/albumreducer";
import {photoReducer} from "../reducers/photoreducer";

const reducers=combineReducers({albums:albumReducer,photo:photoReducer});

export default reducers;
