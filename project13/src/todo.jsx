import React, {useState}from "react";
import Todoform from "./todoform";
const Todo=(props)=>{
    const[todos,setTodos]=useState([{
        id:1,
        text:"my first todo",
        isCompleted:false
    },
    {
        id:2,
        text:"my seoncd list",
        isCompleted:false
    },
    {
        id:3,
        text:"third list final",
        isCompleted:false
    }
]);

const addTodo=(text)=>{
const allData=[...todos,{id:todos.length+1,text,isCompleted:false}];
setTodos(allData);
}

const completedTodos=(index)=>{
    const allData=[...todos];
    allData[index].isCompleted=true;
    setTodos(allData);
    alert("task completed");
}

const deleteTodos=(index)=>{
const allData=[...todos];
allData.splice(index,1);
setTodos(allData);
}

const updateTodos=(id,data)=>{
    props.history.push(`${id}/update`);
    props.history.push(data);
    const newTodos = [...todos];
    newTodos[id].text = data.text;
    setTodos(newTodos);
 
}

    return(
        <>
        <div className="ui container" style={{padding:"20px"}}>
            <div className="ui grid">    
            <div className="eight wide column">    
            {
                todos.map((data,key)=>{
                    return(  
                        <div className="ui card" key={key}>
                        <div className="content">
                            <div className="header" style={{textDecoration:data.isCompleted ? "line-through" : "" }}>{data.text}</div>
                            <div class="extra">
                                <div class="ui label">{data.isCompleted}</div>
                            </div>
                            <div className="right aligned content">
                <i aria-hidden="true" className="bell icon" style={{fontSize:"1.8em",paddingRight:"40px"}} onClick={()=>completedTodos(key)}></i>
                <i aria-hidden="true" className="sync icon" style={{fontSize:"1.8em",paddingRight:"40px"}} onClick={()=>updateTodos(key,data)}></i>
                <i aria-hidden="true" className="minus circle icon" style={{fontSize:"1.8em"}} onClick={()=>deleteTodos(key)}></i>
                </div>
                        </div>
                        
                    </div>         
                    )
                })
            }
            </div>
            <div className="eight wide column">
            
            </div>
            </div>
            <hr/>
            <div className="row">
                <Todoform adddata={addTodo}/>
            </div>
        </div>
        </>
    )
}

export default Todo;