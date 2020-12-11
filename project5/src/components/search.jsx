import React,{Component} from "react";
class Searchdata extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            search:''
        }
    }
searchDataSubmit=(e)=>{
e.preventDefault();
let {search}=this.state;
this.props.searchdata(search);
}

    render(){
        let {search}=this.state;
    return(
        <React.Fragment>
            <form class="ui form" onSubmit={this.searchDataSubmit}>
            <div className="ui search">
  <div className="ui icon input" style={{width:"100%"}}>
    <input className="prompt" type="text" placeholder="Search video..." onChange={(e)=>this.setState({search:e.target.value})} value={search}/>
    <i className="search icon"></i>
  </div>
  </div>
                    </form>
            </React.Fragment>
    )
    }
}
export default Searchdata;