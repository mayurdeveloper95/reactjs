import React from "react";
import Form from "./form";
import "./style.css";
const App =()=>{
    return (
        <React.Fragment>
            <div className="main-bg">
            <div className="ui container">
            <div className="ui grid">
                <div className="ten wide column">
            </div>
            <div className="six wide column">
            <Form/>
            </div>
            </div>
            </div>
                </div>
            </React.Fragment>
    )
}
export default App;