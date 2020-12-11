import React ,{Component} from "react";
import Ucard from "./component/usercard";
import Searchdata from "./component/search";
import Axios from "axios";

class App extends Component
{
    constructor()
    {
        super();
        this.state={
            allData:[],
        }
    }

fetchData= async(data)=>{
    let res =await Axios.get(`api_key`)
this.setState({allData:res.data.hits})
};
 
    render(){
        return(
            <div className="ui container" style={{paddingTop:'20px'}}>
                <Searchdata filter={this.fetchData}/>
    <div className="ui four column grid">
        <Ucard data={this.state.allData}/>
    </div> 
        </div>
                )}
        };
export default App;