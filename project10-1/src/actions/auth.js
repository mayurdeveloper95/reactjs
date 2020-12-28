import {facebookprovider,githubprovider} from "../helper";
import firebase from "firebase/app";
import "firebase/auth";
import {history} from "../history";
import {FETCH_AUTH_DATA,FETCH_AUTH_DATA_GITHUB} from "./type";
export const facebookAuthAction=()=>{
    return (dispatch)=>
    {
        firebase.auth().signInWithPopup(facebookprovider).then(()=>{
            history.push("/home");
            window.location.reload();
        });
    }
}

export const githubAuthAction=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(githubprovider).then(()=>{
            history.push("/home");
            window.location.reload();
        });
    }
}


export const facebookSignOut=()=>{
    return (dispatch)=>{
        firebase.auth().signOut().then(()=>{
            history.push("/login");
            window.location.reload();
        })
    }
}


export const githubSignOut=()=>{
    return (dispatch)=>{
        firebase.auth().signOut().then(()=>{
            history.push("/login");
            window.location.reload();
        })
    }
}

export const facebookGetData=()=>{
    return (dispatch)=>{
        firebase.auth().onAuthStateChanged((user)=>{
            dispatch({type:FETCH_AUTH_DATA,payload:user})
        })
    }
}

export const githubGetData=()=>{
    return (dispatch)=>{
        firebase.auth().onAuthStateChanged((user)=>{
            dispatch({type:FETCH_AUTH_DATA_GITHUB,payload:user})
        })
    }
}