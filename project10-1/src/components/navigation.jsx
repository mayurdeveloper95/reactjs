import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../style.css";
import {facebookSignOut,facebookGetData,githubSignOut,githubGetData} from "../actions/auth";
import {connect} from "react-redux";
class Navigation extends Component{

    componentDidMount()
    {
       this.props.facebookGetData();
        //this.props.githubGetData();
    }
    render()
    {
        return (
            <div className="ui inverted menu">
                <div className="ui container">
                <Link className="active item" to="/home">
                <i className="home icon"></i>
                    Home</Link>
                <Link className="item" to="/todolist">
                <i className="sticky note outline icon"></i>
                    TodoList</Link>
                <div className="right menu">
                    {
                        this.props.user?<div className="item">
                            <img class="ui middle aligned mini image" src={this.props.user.photoURL} style={{paddingRight:"5px"}}/>
                            <span>Hello,{this.props.user.displayName}</span>
                            </div>
                      :null
                    }
                    {
                        !this.props.user?<Link className="item" to="/login">
                        <i className="sign-in icon"></i>
                            Login</Link>:<Link className="item" onClick={()=>this.props.facebookSignOut()}>Logout</Link>
                    }
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {user:state.user.user}
}

export default connect(mapStateToProps,{facebookGetData,facebookSignOut,githubGetData,githubSignOut})(Navigation);