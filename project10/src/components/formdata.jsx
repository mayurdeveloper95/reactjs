import React, { Component } from "react";
import {connect} from "react-redux";
import {getDataAction} from "../actions/formaction";
import Formcard from "./formcarddata";
class Formdata extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            description:''
        }
    }
    handleFormData=(e)=>{
        e.preventDefault();
        let data={
            title:this.state.title,
            description:this.state.description
        }
        this.props.getDataAction(data);
        alert("thanks for submitting notes");
        this.setState({title:'',description:''});
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="ui container" style={{padding:"20px"}}>
                    <form className="ui form" onSubmit={this.handleFormData}>
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
                    <hr/>
                    <div className="ui container" style={{padding:"30px 0px"}}>
                    <Formcard {...this.props}/>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}


export default connect(null,{getDataAction})(Formdata);