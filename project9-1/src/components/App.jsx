import React, { Component } from "react";
import Albums from "./Album";

class App extends Component{
    render()
    {
        return(
            <React.Fragment>
                <div className="ui container" style={{padding:"30px"}}>
                    <div className="ui grid">
                            <Albums/>
                    </div>
                    
                </div>
            </React.Fragment>
        
            )
    }
}
export default App;