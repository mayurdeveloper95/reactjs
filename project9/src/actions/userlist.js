import {USERS} from "./type";
import {userList} from "../api/postlist";

export const userListData=(uid)=>{
    return async(dispatch)=>{
        let res=await userList(uid);
        dispatch({type:USERS,payload:res.data})
    }
}