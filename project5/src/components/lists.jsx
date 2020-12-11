import React from "react";
import Items from "../components/items";

const List=({youtubelist,videoplay})=>{
return(
youtubelist.map((item)=>
    <Items video={item} key={item.id.videoId} youtubeplay={videoplay}/>)
)
}
export default List;