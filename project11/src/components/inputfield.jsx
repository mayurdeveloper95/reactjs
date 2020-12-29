import React, { Component } from "react";
import Lang from "../context/language";

class Inputfield extends Component{
    static contextType=Lang;
    render()
    {
        const text=this.context === "english" ? "Username" :"वापरकर्तानाव";
        return(
            <React.Fragment>
            <div className="ui labeled input">
                <div className="ui label label">{text}</div>
                <input type="text" placeholder={
                    this.context==="english" ? "Enter Username" :"वापरकर्तानाव प्रविष्ट करा"
                }/>
            </div>
            </React.Fragment>
        )
    }
}

export default Inputfield;