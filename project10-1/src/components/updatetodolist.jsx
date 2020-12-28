import React, { Component } from "react";
import {updateDataToDb} from "../actions/todolistaction";
import {connect} from "react-redux";
class Updatetodolist extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            taskname:this.props.items.taskname,
            description:this.props.items.description
        }
    }

    handleFormData=(e)=>{
        e.preventDefault();
        let data={
            taskname:this.state.taskname,
            description:this.state.description
        }
        this.props.updateDataToDb(this.props.match.params.id,data);
        this.setState({taskname:"",description:""});
        this.props.history.push("/todolist");
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="ui container" style={{padding:"20px"}}>
                    <h1>Update Todo list</h1>
                                    <form className="ui form" onSubmit={this.handleFormData}>
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
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state,ownprops)=>{
    return {items:state.todolist[ownprops.match.params.id]};
}

export default connect(mapStateToProps,{updateDataToDb})(Updatetodolist);