import React from "react";
import {facebookAuthAction,githubAuthAction} from "../actions/auth";
import {connect} from "react-redux";

const Login =(props)=>{
  return (
            <>
            <div className="ui center aligned container" style={{padding:"20px"}}>
                <div className="ui buttons">
                <button className="ui red button" onClick={props.facebookAuthAction}>Login with Facebook</button>
                <div className="or"></div>
                <button className="ui blue button" onClick={props.githubAuthAction}>Login With GitHub</button>
                </div>
            </div>
            </>
        )
    }

export default connect(null,{facebookAuthAction,githubAuthAction})(Login);