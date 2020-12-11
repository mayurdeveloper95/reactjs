import React,{Component} from "react";
import Geoloc from "./geolocation";

class App extends Component{
    constructor()
    {
        super();
        this.state={
            lat:'',
            errorMsg:''
        }
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition((location)=>{
           this.setState({lat:location.coords.latitude});
        },error=>this.setState({errorMsg:error.message}));
    }

    render(){
        if (this.state.lat && !this.state.errorMsg)
        {
            return <Geoloc lati={this.state.lat}/>
        }
        if (!this.state.lat && this.state.errormsg)
        {
        return <h1>{this.state.errorMsg}</h1>
        }
        else{
           return <h1> Loading.....  </h1>
        }
    }
}
export default App;