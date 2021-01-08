import React,{Component} from "react";
import axios from "axios";
import Listdata from "./components/lists";
import Videoplay from "./components/videoplayer";
import Searchdata from "./components/search";

class App extends Component
{
    constructor()
    {
        super();
        this.state={
            videos:[],
            singlevideo:''
        }
    }


    componentDidMount=()=>{
        this.getYotubeData('love songs');
    }
getYotubeData=async(data)=>{
let searchdata=await axios.get("https://www.googleapis.com/youtube/v3/search",{
params:{  
    q:data,  
    part:'snippet',
    type:'videos',
    maxResults:20,
    key:"api-key"
}
});
this.setState({videos:searchdata.data.items});
this.setState({singlevideo:searchdata.data.items[0]});
}

youtubeSingleVideo=(data)=>{
    this.setState({singlevideo:data});
}


    render()
    {
        return (
            <React.Fragment>
                <div className="ui container" style={{padding:"20px"}}>
                    <div className="ui grid">
                        <div className="row">
                            <div className="column">
                            <Searchdata searchdata={this.getYotubeData}/>
                                </div>
                            </div>
                            <div className="row">
                            <div className="twelve wide column">
                                <Videoplay play={this.state.singlevideo}/>
                                </div>
                                <div className="four wide column">
                                <Listdata youtubelist={this.state.videos} videoplay={this.youtubeSingleVideo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}
export default App;