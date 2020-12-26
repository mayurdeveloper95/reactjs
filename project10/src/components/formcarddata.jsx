import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchDataAction,deleteDataAction,updateDataAction} from "../actions/formaction";
import _ from "lodash";
import "../style.css";

class Formcarddata extends Component{

componentDidMount=()=>{
    this.props.fetchDataAction();
}

editUpdate=(id)=>{
this.props.history.push(`${id}/update`);
}
    render()
    {
        if(!this.props.items){return <h1>Loading data...</h1>}
        return(
            <React.Fragment>
                {
                    _.map(this.props.items,(value,index)=>{
                        return(
                            <div className="ui card" key={index} style={{flexFlow:"wrap"}}>
                 <div className="content">
                <div className="header">{value.title}</div>
                <div className="description">{value.description}</div>
                </div>
                <div className="right aligned content">
                <button className="ui primary button" onClick={()=>this.editUpdate(index)}>Update</button>
                <button className="ui primary button" onClick={()=>this.props.deleteDataAction(index)}>Delete</button>
                </div>
                </div>
                        )
                    })
                }
                
            </React.Fragment>
        )
    }
}

const mapStateToProps =(state)=>{
return {items:state.data};
}

export default connect(mapStateToProps,{fetchDataAction,deleteDataAction,updateDataAction})(Formcarddata)