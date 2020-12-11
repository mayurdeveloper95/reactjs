import React from "react";

const Userbuttons=(props)=>{
return(
    <React.Fragment>
         
    <div className="col text-center" style={{paddingTop:'20px'}}>
    <div>
    {props.children}
        <button type="button" class="btn btn-primary" style={{marginRight:"20px"}}>Approve</button>
        <button type="button" class="btn btn-danger" style={{marginLeft:"20px"}}>Reject</button>
        </div>
        </div>
        </React.Fragment>
)
};
export default Userbuttons;