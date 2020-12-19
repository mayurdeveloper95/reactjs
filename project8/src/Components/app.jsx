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
                <div className="ui two column grid">
                    <div className="row">
                        <div className="column">
                       <SongList/>
                        </div>
                        <div className="column">
                        <SelectedSong/>
                        </div>
                    </div>
                </div>
                </div>
                </React.Fragment>
        )
    }
}
export default App;