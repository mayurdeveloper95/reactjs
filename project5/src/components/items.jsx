import React from "react";

const Item =({video,youtubeplay})=>{
    if(!video){return <h1>Loading...</h1>}
    return(
        <React.Fragment>
                <div className="ui card" onClick={()=>youtubeplay(video)}>
                    <div className="content">
                        <img src={video.snippet.thumbnails.high.url} className="ui floated image" alt={video.snippet.thumbnails.title}/>
    <div className="header">{video.snippet.title}</div>
    <div className="description">{video.snippet.description}</div>
                        </div>
                        </div>       
            </React.Fragment>
    )
}
export default Item;