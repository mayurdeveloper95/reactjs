import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
const Navigation=()=>{
    return(
        <>
            <div className="ui inverted menu">
                <div className="ui container">
                    <Link className="active item" to="/todo">Create Todo</Link>
                </div>
            </div>
        </>
    )
}
export default Navigation;