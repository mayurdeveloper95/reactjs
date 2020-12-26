import {googleprovider} from "../helper";
import firebase from "firebase/app";
import "firebase/auth";
import {history} from "../history";
import {FETCH_AUTH_DATA} from "./type"; 

export const googleAuthAction =()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleprovider).then(()=>{
            history.push("/");
            window.location.reload();
        });
    }
}

export const googleSignOut=()=>{
    return (dispatch)=>{
        firebase.auth().signOut().then(()=>{
            history.push("/login");
            window.location.reload();
        });
    }
}

export const fetchUserData=()=>{
    return (dispatch)=>{
        firebase.auth().onAuthStateChanged((user)=>{
            dispatch({type:FETCH_AUTH_DATA,payload:user});
        })
    }
}