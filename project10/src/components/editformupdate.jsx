import React, { Component } from "react";
import {connect} from "react-redux";
import {updateDataAction} from "../actions/formaction";
class Editformupdate extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:this.props.items.title,
            description:this.props.items.description
        }
    };
    handleFormData=(e)=>{
        e.preventDefault();
        let data={
            title:this.state.title,
            description:this.state.description
        }
        this.props.updateDataAction(this.props.match.params.id,data);
        this.setState({title:'',description:''});
        this.props.history.push("/");
    }
    render()
    {
        return(
            <React.Fragment>  
             <div className="ui container" style={{padding:"20px"}}>
             <h1>Update Form</h1>
                <hr/>
            <form className="ui form" onSubmit={this.handleFormData} style={{paddingTop:"30px"}}>
                <div className="field">
                    <label>Title</label>
                    <input placeholder="Enter Title" name="title" value={this.state.title} onChange={e=>this.setState({title:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea placeholder="Enter Description" rows="3" name="description" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state,ownprops)=>{
return {items:state.data[ownprops.match.params.id]};

}

export default connect(mapStateToProps,{updateDataAction})(Editformupdate);