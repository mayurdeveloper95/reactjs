import React from "react";

const Body=(props)=>{
return(
    <React.Fragment>
<h4 className="card-title">{props.name}</h4>
<button type="button" class="btn btn-outline-primary">{props.position}</button>
       </React.Fragment>
)};

export default Body;