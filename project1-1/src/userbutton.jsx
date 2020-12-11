import React from "react";

const Userbutton=(props)=>{
return (
    <React.Fragment>
       
        <div class="column ui center aligned">
        {props.children}
        <button class="ui primary button">
        Approve
        </button>
        <button class="ui primary button">
        Reject
        </button>
        </div>
        </React.Fragment>
)
}
export default Userbutton;