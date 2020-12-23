import React, { Component } from "react";
import Post from "./post";
class App extends Component{
    render()
    {
        return(
                <React.Fragment>
                    <div className="ui container" style={{padding:"30px"}}>
                        <div className="ui grid">
                            <Post/>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}
export default App;