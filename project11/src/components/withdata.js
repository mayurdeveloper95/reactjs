import React, { Component } from "react";

const Withdata=(WrapComponent,FetchApi)=>{
    class Withdata extends Component{
        constructor()
        {
            super();
            this.state={
                data:[]
            }
        }
        componentDidMount()
        {
            fetch(FetchApi)
            .then(res=>res.json())
            .then(data=>this.setState({data:data}));
        }
        render()
        {
            if(this.state.data.length < 1 ){return <h1>Loading....</h1>};
            return <WrapComponent da={this.state.data}{...this.props}/>
        }
    }
    return Withdata;
}

export default Withdata;