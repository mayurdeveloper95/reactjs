import React ,{useState,useEffect} from "react";
import Fetchapi from "./fetchapi";

const App=()=>{
    const [name,setName]=useState("users");

    const data=Fetchapi(`https://jsonplaceholder.typicode.com/${name}`,name);
    if(!data){return null;}
return(
    <>
    <div className="ui container" style={{padding:"20px"}}>
        <div className="ui grid">
            <div className="sixteen wide column">
                <button className="ui primary button" onClick={()=>setName("users")}>Users</button>
                <button className="ui button" onClick={()=>setName("posts")}>Posts</button>
            </div>
            <div className="sixteen wide column">
                {
                    data.map(item=>{
                        return(
                            <div className="ui card" key={item.id} style={{marginBottom:"15px"}}>
                                        <div className="content">
                                            <div className="header">
                                                {
                                                    item.title ? <h4>{item.title}</h4>:<h4>{item.username}</h4>
                                                }
                                            </div>
                                        </div>
                                </div>
                        )
                    })
                }
            
            </div>
        </div>
    </div>
    </>
)
}

export default App;