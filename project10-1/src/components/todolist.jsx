import React, { Component } from "react";
import {sendDataToDb} from "../actions/todolistaction.js";
import {connect} from "react-redux";
import TodolistResult from "../components/todolistresult";
class Todolist extends Component{

constructor(props)
{
    super(props);
    this.state={
        taskname:"",
        description:'',
    }
}


handleData=(e)=>{
e.preventDefault();
let data={
    taskname:this.state.taskname,
    description:this.state.description
}
this.props.sendDataToDb(data);
alert("todo list created");
this.setState({taskname:"",description:''})
}
    render()
    {
        return (
            <React.Fragment>
                <div className="ui container" style={{padding:"20px"}}>
                    <h1>Todo list</h1>
                        <div className="ui grid">
                            <div className="row">
                                <div className="eight wide column">
                                    <form className="ui form" onSubmit={this.handleData}>
                                        <div className="field">
                                            <label>Task name</label>
                                            <input type="text" name="taskanme" placeholder="Task Name" value={this.state.taskname} onChange={(e)=>this.setState({taskname:e.target.value})}/>
                                        </div>
                                        <div className="field">
                                            <label>Description</label>
                                            <textarea name="description" placeholder="Description" rows="4" value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}/>
                                        </div>
                                        <div className="field">
                                            <div className="ui checkbox">
                                                <input type="checkbox" className="check" name="check"/>
                                                <label>I agree to the Terms and Conditions</label>
                                            </div>
                                        </div>
                                         <button className="ui button" type="submit">Submit</button>
                                    </form>
                                </div>
                                <div className="eight wide column">
                                <TodolistResult {...this.props}/>
                                </div>
                            </div>
                        </div>
                </div>            
            </React.Fragment>
        )
    }
}


export default connect(null,{sendDataToDb})(Todolist);