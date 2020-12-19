import React from "react";
import {connect} from "react-redux";
import selectSong from "../Actions/index";
const songList = (props)=>{
    return(
        <div className="ui divided items">
        {
           props.songs.map((data)=>{
               
            return(       
        <div className="item" key={data.title} onClick={()=>props.selectSong(data)}>
          <div className="image">
            <img src={data.song} alt="song image"/>
          </div>
          <div className="content">
            <div className="header">{data.title}</div>
            <div className="extra">
            <div className="ui right floated primary button">
                Play
                <i className="play circle icon"></i>
              </div>
              <div className="ui label">Duration:{data.duration}</div>
              <div className="ui label">Movie: {data.movie}</div>
              <div className="ui label">Released: {data.released}</div>
              <div className="ui label">Artist:{data.artist}</div>
            </div>
          </div>
        </div>
            ) 
        }
            )
        }     
        </div>
    )
}

const mapStateToProps=(state)=>{
return {songs:state.s};

}


export default connect(mapStateToProps,{selectSong}) (songList);