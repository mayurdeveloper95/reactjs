import React from "react"
import Image from "./userimage";
import Body from "./userbody";

const Card =(props)=>{
return(
    <React.Fragment>
    <div className="card text-left">
       <Image img={props.imgurl}/>
       <div className="card-body text-center">
       <Body name={props.name} position={props.position}/>
       </div>
   </div>
   </React.Fragment>
)};

export default Card;