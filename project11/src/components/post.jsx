import React from "react"
import Withdata from "./withdata";

const Post =(props)=>{
    return(
        <>
        <h1>POST</h1>
        <div className="ui grid">
                        <div className="row">
        {
            props.da.slice(0,10).map(item=>{
                    return(
                        
                            <div className="eight wide column">
                                    <div className="ui card" key={item.id} style={{marginBottom:"15px"}}>
                                        <div className="content">
                                            <div className="header">{item.title}</div>
                                            <div className="description">
                                            {item.body}
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
                                            <div className="header">{item.title}</div>
                                            <div className="description">
                                            {item.body}
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
export default Withdata(Post,"https://jsonplaceholder.typicode.com/posts");

    