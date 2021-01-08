import React,{Component} from "react";
import axios from "axios"
import "./style.css";
import Videolist from "./component/videolist";
import Searchdata from "./component/search";
import Videoplay from "./component/videoplay";

class App extends Component{
    constructor()
    {
        super();
        this.state={
            videos:[],
            selectedVideo:''
        }
    }
componentDidMount()
{
    this.getApiData("Mr. bean comedy");
}

    getApiData=async(data)=>
    {
        let res=await axios.get("https://www.googleapis.com/youtube/v3/search",{
params:{  
    q:data,  
    part:'snippet',
    type:'videos',
    maxResults:20,
    key:"api-key"
}
});
this.setState({videos:res.data.items});
this.setState({selectedVideo:res.data.items[0]})
    }

selectedVideoData=(data)=>{
    this.setState({selectedVideo:data});
}


    render()
    {
        return(
        <React.Fragment>
          <div className="ui container">
                    <div className="ui grid">
                        <div className="row">
                        <div className="twelve wide computer ten wide tablet sixteen wide mobile column">
                            <div className="search-bg"><Searchdata searchop={this.getApiData}/></div>
                            <div className="videoplay"><Videoplay playdata={this.state.selectedVideo}/></div>
                            </div>
                            <div className="four wide computer six wide tablet sixteen wide mobile column">
                                <div className="main-border">
                                    <h3>Related Videos</h3>
                                    <div className="ui divider"></div>
                            <Videolist videoitem={this.state.videos} videodata={this.selectedVideoData}/>
                            </div>
                                </div>
                                </div>
                        </div>
                    </div>
        </React.Fragment>
        )
    }
}
export default App;