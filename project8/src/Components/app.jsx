import React, { Component } from "react";
import "../style.css";
import SelectedSong from "./selectedsong";
import SongList from "./songlist";
class App extends Component{
    
    render()
    {
        return (
            <React.Fragment>
                <div className="ui container" style={{padding:"20px"}}>
                <div className="ui grid">
                    <div className=" eight wide computer eight wide tablet sixteen wide mobile column">
                       <SongList/>
                        </div>
                        <div className="eight wide computer eight wide tablet sixteen wide mobile column">
                        <SelectedSong/>
                        </div>
                </div>
                </div>
              
                </React.Fragment>
        )
    }
}
export default App;