import React, {Component} from "react";
class Searchdata extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            searchresult:''
        }
    }
getSearch=(e)=>{
    e.preventDefault();
    this.props.searchop(this.state.searchresult);

}

    render()
    {
        return(
            <React.Fragment>
                <form onSubmit={this.getSearch}>
                <div className="ui search">
                 <div className="ui icon input">
                 <input type="search" placeholder="Search..." 
                 onChange={(e)=>this.setState({searchresult:e.target.value})}
                 value={this.state.searchresult}
                 />
                <i className="search icon"></i>
                </div>
                </div>
                </form>
                </React.Fragment>
        )
    }
}
export default Searchdata;