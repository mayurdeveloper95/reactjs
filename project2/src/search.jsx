import React ,{Component}from "react";

class Searchdata extends Component{

constructor(props)
{
super(props);
}

render()
{
    return(
    <React.Fragment>
        <div className="col-12">
        <div className="active-pink-3 active-pink-4" style={{padding:'20px 0px'}}>
  <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(d)=>this.props.filter(d)}/>
</div>
        </div>
        </React.Fragment>
    )
}
}
export default Searchdata;
