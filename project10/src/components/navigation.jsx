import React, { Component } from "react";
import {Link} from "react-router-dom";
import {googleSignOut,fetchUserData} from "../actions/auth";
import {connect} from "react-redux";
class Navigation extends Component{
    componentDidMount()
    {
        this.props.fetchUserData();
    }
    render()
    {
        return(
            <>
            <div className="ui inverted menu">
                 <Link className="active item" to="/form">Form</Link>
                 <div className="right menu">
                 <span className="item">
                {
                    this.props.user?<h4>welcome,{this.props.user.displayName}</h4>:null
                }
                </span>
                {
                    !this.props.user?<Link className="item" to="/login">Login</Link>:<span className="item" onClick={()=>this.props.googleSignOut()}>Logout</span>
                } 
                 </div>
            </div>
            </>
        )
    }
}

const mapStateToProps =(state)=>{
return {user:state.user.user};
}


export default connect(mapStateToProps,{fetchUserData,googleSignOut})(Navigation);