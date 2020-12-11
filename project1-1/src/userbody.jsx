import React from "react";
import Ubutton from "./userbutton";

const Userbody=(props)=>{
return(
    <React.Fragment>
    <div className="content ui center aligned">
    <a className="header">{props.name}</a>
    <div className="description">{props.desc}</div>
   </div>
   <div className="extra content ui center aligned">
   <a>
   <i className="user icon"></i> 22 Friends
   </a>
   </div>
  
   </React.Fragment>
)
}
export default Userbody;