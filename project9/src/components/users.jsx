import React, { Component } from "react";
import {connect} from "react-redux";
import {userListData} from "../actions/userlist";

class Users extends Component{

componentDidMount()
{
    this.props.userListData(this.props.uid);
}
render()
{
        if(!this.props.user){return null};
        return<h3>{this.props.user.name}</h3>  
}
};
const mapStateToProps=(state,ownprops)=>{
return {user:state.users.find(user => user.id === ownprops.uid)}
}
export default connect(mapStateToProps,{userListData})(Users);