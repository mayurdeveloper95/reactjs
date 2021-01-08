import React from "react";
import List from "../component/list";
const Playlist=(props)=>{
    if(!props.videoitem){return null;}
return(props.videoitem.map((data)=> <List item={data} key={data.id.videoId} vdata={props.videodata}/>))
}
export default Playlist;