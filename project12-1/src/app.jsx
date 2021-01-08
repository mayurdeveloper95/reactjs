import React,{useState,useEffect} from "react";
import axios from "axios"
import "./style.css";
import Videolist from "./component/videolist";
import Searchdata from "./component/search";
import Videoplay from "./component/videoplay";

const App =()=>{
    const[videos,setVideos]=useState([]);
    const[selectedVideo,setSelectedVideo]=useState();

    useEffect(()=>{
        getApiData("mr.bean");
        },[]);
    
    const getApiData=async(data)=>{
        let res=await axios.get("https://www.googleapis.com/youtube/v3/search",{
        params:{  
        q:data,
        part:'snippet',
        type:'video',
        maxResults:20,
        key:"api-key"
        }
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
    }

    const selectedVideoData=(data)=>{
    setSelectedVideo(data)}

        return(
        <React.Fragment>
          <div className="ui container">
                    <div className="ui grid">
                        <div className="row">
                        <div className="twelve wide computer ten wide tablet sixteen wide mobile column">
                        <div className="search-bg"><Searchdata searchop={getApiData}/></div>
                            <div className="videoplay"><Videoplay playdata={selectedVideo}/></div>
                            </div>
                            <div className="four wide computer six wide tablet sixteen wide mobile column">
                                <div className="main-border">
                                    <h3>Related Videos</h3>
                                    <div className="ui divider"></div>
                            <Videolist videoitem={videos} videodata={selectedVideoData}/>
                            </div>
                                </div>
                                </div>
                        </div>
                    </div>
        </React.Fragment>
        )
    }
export default App;