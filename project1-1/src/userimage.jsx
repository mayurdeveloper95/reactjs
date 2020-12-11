import React from "react";

const Userimage=(props)=>{
return(
    <React.Fragment>
    <div className="image">
     <img src={props.img} className="ui image"/>
    </div>
    </React.Fragment>
)
}

export default Userimage;