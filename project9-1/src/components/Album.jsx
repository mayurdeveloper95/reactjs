import React, { Component } from "react";
import {connect} from "react-redux";
import {getDataAlbums} from "../actions/album";
import Photos from "./Photo";

class Album extends Component{
   
componentDidMount()
{
    this.props.getDataAlbums();
}

    render()
    {
        if(!this.props.album){return <h2>Loading....</h2>}
        {
        return(
            
                this.props.album.slice(0,9).map(data=> (
                    
                    <div className="ui card" key={data.id} style={{margin:"20px"}}>
                    <div className="content">
                   <div className="header">{data.title}</div>
                   <div className="description"></div>
                   </div>
                   <div className="extra content">
                   <Photos uid={data.id}/>
                   </div>
                   </div>
                    )
                )
        )
            }
    }
}

const mapStateToProps=(state)=>{
return {album:state.albums}
}

export default connect(mapStateToProps,{getDataAlbums})(Album)