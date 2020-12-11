import React from "react"

const VideoPlayer=({play})=>{
    if(!play){return <h1>Loading</h1>}
    let url=`https://www.youtube.com/embed/${play.id.videoId}`
return(
    <React.Fragment>
<div className="ui embed">
<iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

</div>
<h2>{play.snippet.title}</h2>
    </React.Fragment>
)
}
export default VideoPlayer;