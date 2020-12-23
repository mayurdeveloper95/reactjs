import React, { Component } from "react";
import {connect} from "react-redux";
import {userPostData} from "../actions/post";
import Users from "./users";

class Post extends Component{

componentDidMount()
{
    this.props.userPostData();
}

    render()
    {
        if(!this.props.post){return <h2>Loading....</h2>}
        {
        return(
            
                this.props.post.slice(0,9).map(data=> (
                    
                    <div className="ui card" key={data.id} style={{margin:"20px"}}>
                    <div className="content">
                   <div className="header">{data.title}</div>
                   <div className="description">{data.body}</div>
                   </div>
                   <div className="extra content">
                       <Users userid={data.id}/>
                   </div>
                   </div>
                    )
                )
        )
            }
        
            
    }
}

const mapStateToProps=(state)=>{
return {post:state.post};
}

export default connect(mapStateToProps,{userPostData}) (Post);