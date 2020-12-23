import {ALBUMS} from "./type";
import {getAlbums} from "../api/index";

export const getDataAlbums=()=>{
    return async(dispatch)=>{
        let res=await getAlbums();
        dispatch({type:ALBUMS,payload:res.data})
    }
}