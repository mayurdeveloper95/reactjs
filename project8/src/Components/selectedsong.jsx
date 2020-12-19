import React from "react";
import {connect} from "react-redux";
const SelectedSong=(props)=>{
    if(!props.song){return null}
    return(
<div className="ui divided items" >            
        <div className="item" style={{padding:"20px"}}>
          <div className="image">
            <img src={props.song.song} alt="song image"/>
          </div>
          <div className="content">
            <div className="header">{props.song.title}</div>
            <div className="extra">
              <div className="ui label">Duration:{props.song.duration}</div>
              <div className="ui label">Movie: {props.song.movie}</div>
              <div className="ui label">Released: {props.song.released}</div>
              <div className="ui label">Artist:{props.song.artist}</div>
            </div>
            
            <audio controls>
  <source src={props.song.url} type="audio/ogg"/>
</audio>
          </div>
        </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
return {song:state.ss}
}

export default connect(mapStateToProps) (SelectedSong);