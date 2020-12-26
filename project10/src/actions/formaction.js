import {db} from "../helper";
import {FETCH_DATA} from "./type";
export const getDataAction=(data)=>{
    return (dispatch)=>{
        db.push(data);
    }
}

export const fetchDataAction=()=>{
    return (dispatch)=>{
        db.on("value",snap=>{
            let data=snap.val();
            dispatch({type:FETCH_DATA,payload:data})
        })
    }
}

export const updateDataAction=(id,data)=>{
    return (dispatch)=>{
        db.child(id).update(data);
    }
}

export const deleteDataAction=(id)=>{
    return (dispatch)=>{
        db.child(id).remove();
    }
}