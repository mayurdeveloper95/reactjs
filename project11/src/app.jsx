import React, { Component } from "react";
import Userfield from "./components/user";
import Lang from "./context/language";
import Post from "./components/post";
import Userpost from "./components/userpost";
class App extends Component{
    constructor()
    {
        super();
        this.state={
            lang:"english"
        }
    }

    changeLanguage=(data)=>{
        this.setState({lang:data});
    }

    render()
    {
        return (
            <React.Fragment>
            <div className="ui container" style={{padding:"20px"}}>
                <div className="ui grid">
                    <div className="row">
                        <div className="eight wide column">
                        <div className="field" style={{marginBottom:"30px"}}>
                            <button className="ui button" onClick={()=>this.changeLanguage("english")}>English</button>
                            <button className="ui button" onClick={()=>this.changeLanguage("marathi")}>Marathi</button>
                        </div>
                        <Lang.Provider value={this.state.lang}>
                            <Userfield/>  
                        </Lang.Provider>
                        </div>
                    </div>    

                    <div className="row">
                        <div className="eight wide column">
                            <Post/>
                        </div>
                        <div className="eight wide column">
                            <Userpost/>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
     }
}

export default App;