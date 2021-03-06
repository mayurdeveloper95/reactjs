import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
const firebaseconfig={
    apiKey: "*************************",
    authDomain: "****************************",
    databaseURL: "******************************",
    projectId: "**********",
    storageBucket: "**************************",
    messagingSenderId: "*****************************",
    appId: "***********************************"
};

firebase.initializeApp(firebaseconfig);

export const db=firebase.database().ref("todolist");

export const facebookprovider=new firebase.auth.FacebookAuthProvider();

export const githubprovider=new firebase.auth.GithubAuthProvider();