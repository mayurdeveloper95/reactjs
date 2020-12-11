import React from "react";
const Videoplay=(props)=>{
    if(!props.playdata){return <h1>Loading</h1>}
    let url=`https://www.youtube.com/embed/${props.playdata.id.videoId}`
return(
    
    <React.Fragment>
       <div className="ui embed">
        <iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
<h2>{props.playdata.snippet.title}</h2>
<div class="ui divider"></div>
<p>{props.playdata.snippet.description}</p>
        </React.Fragment>
)
}
export default Videoplay;
