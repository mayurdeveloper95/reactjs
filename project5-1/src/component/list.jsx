import React from "react";

const List =(props)=>{
  console.log(props.item)
    if(!props.item){return <h1>Loading...</h1>}
return(
<React.Fragment>
<div className="ui card" onClick={()=>props.vdata(props.item)}>
  <div className="image">
    <img src={props.item.snippet.thumbnails.medium.url} alt={props.item.snippet.thumbnails.title}/>
  </div>
  <div className="content">
<div className="header">{props.item.snippet.channelTitle}</div>
    <div className="meta">
<span className="date">{props.item.snippet.title}</span>
    </div>
  </div>
  <div className="extra content">
  {props.item.snippet.publishedAt}
  </div>
</div>

</React.Fragment>
)
}
export default List;