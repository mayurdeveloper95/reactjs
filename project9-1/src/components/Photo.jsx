import React, { Component } from "react";
import {connect} from "react-redux";
import {getDataPhotos} from "../actions/picture";

class Photo extends Component{

componentDidMount()
{
    this.props.getDataPhotos(this.props.uid);
}
    render()
    {
        if(!this.props.photo){return null}
        return (
            <React.Fragment>
                {
                   
                    <div className="content">
  <h3>{this.props.photo.title}</h3>
  <img src={this.props.photo.thumbnailUrl}/>
  </div>
                }
            </React.Fragment>      
        )
        }

}

const mapStateToProps=(state,ownprops)=>{
return {photo:state.photo.find(photo=>photo.id === ownprops.uid)}
}

export default connect(mapStateToProps,{getDataPhotos})(Photo)