import React ,{Component}from "react";

class Searchdata extends Component{
constructor(props)
{
super(props);
this.state={
    searchData:'all'
}
}

submitData=(d)=>{
    d.preventDefault();
this.props.filter(this.state.searchData);
}
render()
{
    return(
    <React.Fragment>
        <div className="col-12" style={{padding:'20px'}}>
            <form className="ui form" onSubmit={this.submitData}>
        <div className="ui search">
            <div className="ui icon input">
                <input type="text" autoComplete="off" tabindex="0" className="prompt" 
                onChange={(d)=>this.setState({searchData:d.target.value})}
                value={this.state.searchData}
                />
                <i aria-hidden="true" class="search icon"></i>
                </div>
                </div>
                </form>
        </div>
        </React.Fragment>
    )
}
}
export default Searchdata;
