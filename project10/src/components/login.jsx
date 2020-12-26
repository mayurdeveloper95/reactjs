import React from "react";
import {connect} from "react-redux";
import {googleAuthAction} from "../actions/auth";
const Login=(props)=>{
return(
    <React.Fragment>
        <div className="ui center aligned container"> 
        <div className="ui large buttons" style={{marginTop:"30px"}}>
  <button className="ui button" onClick={props.googleAuthAction}> Login with google</button>
  <div className="or"></div>
  <button className="ui button">Login with Email</button>
</div>
        </div>
    </React.Fragment>
)
}

export default connect(null,{googleAuthAction})(Login);