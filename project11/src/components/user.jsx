import React from "react";
import Inputfield from "./inputfield";
import Button from "./button";
const Userfield=()=>{
    return(
        <React.Fragment>
        <div className="field">
        <Inputfield/>
        </div>
        <div className="field">
        <Button/>
        </div>
        </React.Fragment>
    )
}

export default Userfield;