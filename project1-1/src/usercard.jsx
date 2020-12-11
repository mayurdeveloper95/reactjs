import React from "react";
import Uimage from "./userimage";
import Ubody from "./userbody";

const Usercard=(props)=>{
    return(
        <React.Fragment>
            <div class="column">
    <div className="ui card">
    <Uimage img={props.imgsrc}/>
    <Ubody name={props.name} desc={props.desc}/>
   </div>
  </div>
   </React.Fragment>
    )
}
export default Usercard;