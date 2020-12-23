import {USERS_POST} from "./type";
import {userPost} from "../api/postlist";

export const userPostData=()=>{
    return async(dispatch)=>{
        let res=await userPost();
        dispatch({type:USERS_POST,payload:res.data})
    }

}
