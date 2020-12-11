import React, {Component} from "react";
import Card from "./card";
import Sdata from "./search";

class App extends Component{
    constructor()
    {
        super();
        this.state={
            allData:[],
            searchData:''
        }
    }

    async componentDidMount(){
let res= await fetch("api_key")
let data=await res.json();
this.setState({allData:data.hits});
    };

    searchProduct=(d)=>{
       // console.log(d.target.value);
        this.setState({searchData:d.target.value});
        }

    render(){
        let searchfilter=this.state.allData.filter(
            data=> data.user.toLowerCase()
            .includes(this.state.searchData.toLocaleLowerCase()));
    return (
        <div className="container">
            <Sdata filter={this.searchProduct}/>
            <div className="row">
                    {
                        searchfilter.map(data=><Card data ={data} key={data.id}/>)
                }
                </div>
        </div>
                        )}
};

export default App;