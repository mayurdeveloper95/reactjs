import {db} from "../helper";
import {GET_TODOLIST_DATA} from "./type";

export const sendDataToDb=(data)=>{
    return (dispatch)=>{
        db.push(data);
    }
}


export const getDataFromDb=()=>{
    return (dispatch)=>{
        db.on("value",ss=>{
            let data=ss.val();
            dispatch({type:GET_TODOLIST_DATA,payload:data})
        })
    }
}

export const DeleteDataFromDb=(id)=>{
    return (dispatch)=>{
        db.child(id).remove();
    }

}


export const updateDataToDb=(id,data)=>{
    return (dispatch)=>{
        db.child(id).update(data);
    }
}