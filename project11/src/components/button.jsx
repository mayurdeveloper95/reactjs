import React, { Component } from "react";
import Lang from "../context/language";

class Button extends Component{
    static contextType=Lang;
    render()
    {
        const text=this.context === "english" ? "Submit" : "प्रस्तुत करणे";
        return(
            <React.Fragment>
            <button className="ui primary button" style={{marginTop:"30px"}}>{text}</button>
            </React.Fragment>
        )
    }
}

export default Button;