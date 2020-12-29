import React from "react";
import Withdata from "./withdata";

const Userpost =(props)=>{
    return(
        <>
        <h1>USERS</h1>
        <div className="ui grid">
                        <div className="row">
        {
            props.da.slice(0,10).map(item=>{
                    return(
                        
                            <div className="eight wide column">
                                    <div className="ui card" key={item.id} style={{marginBottom:"15px"}}>
                                        <div className="content">
                                            <div className="header">{item.name}</div>
                                            <div className="description">
                                            {item.email}
                                            </div>
                                        </div>
                                 </div>
                                 
                            </div>
                            )})
                    }
                    {
                            props.da.slice(0,10).map(item=>{
                    return(

                            <div className="eight wide column">
                                    <div className="ui card" key={item.id} style={{marginBottom:"15px"}}>
                                        <div className="content">
                                            <div className="header">{item.name}</div>
                                            <div className="description">
                                            {item.email}
                                            </div>
                                        </div>
                                 </div>
                            </div>
                    )})
}
                        </div>
                </div>        
        </>
    )
}

export default Withdata(Userpost,"https://jsonplaceholder.typicode.com/users");

    