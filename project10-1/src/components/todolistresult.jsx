import React, { Component } from "react";
import {connect} from "react-redux";
import {getDataFromDb,DeleteDataFromDb,updateDataToDb} from "../actions/todolistaction";
import _ from "lodash";
class TodolistResult extends Component{
   componentDidMount()
   {
    this.props.getDataFromDb();
   }
editTodolist=(id)=>{
this.props.history.push(`${id}/update`);
}

    render()
    {
        if(!this.props.data){return null}
        return(
            <React.Fragment>
                {
                    _.map(this.props.data,(value,index)=>{
                        return(
                            <div className="ui card" key={index} style={{flexFlow:"wrap"}}>
                 <div className="content">
                <div className="header">{value.taskname}</div>
                <div className="description">{value.description}</div>
                </div>
                <div className="right aligned content">
                <i aria-hidden="true" className="sync circle icon" style={{fontSize:"1.8em",paddingRight:"40px"}} onClick={()=>this.editTodolist(index)}></i>
                <i aria-hidden="true" className="minus circle icon" style={{fontSize:"1.8em"}} onClick={()=>this.props.DeleteDataFromDb(index)}></i>
                </div>
                </div>
                        )
                    })
                }
                
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
return {data:state.todolist};
}

export default connect(mapStateToProps,{getDataFromDb,DeleteDataFromDb,updateDataToDb})(TodolistResult);