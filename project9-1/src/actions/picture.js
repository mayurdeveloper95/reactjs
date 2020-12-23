import {PICTURES} from "./type";
import {getPhotos} from "../api/index";

export const getDataPhotos=(uid)=>{
    return async(dispatch)=>{
        let res=await getPhotos(uid);
        dispatch({type:PICTURES,payload:res.data})
    }
}