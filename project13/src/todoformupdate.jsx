import React,{useState} from "react";

const Todoformupdate =(props)=>{
    const [value, setValue] = useState(props.updateTodos);
    const handleFormData=(e)=>
    {
        e.preventDefault();
        if(!value){return null;}
        let data={
            text:value,
        }
        props.updateTodos(data);
        setValue({text:""});
        this.props.history.push("/todo");
    }
        return(
            <>
            <div className="ui container" style={{padding:"20px"}}>
        <form className="ui form" onSubmit={handleFormData}>
            <div className="field">
                <label>Update Todo</label>
                <input type="text" name="first-name" placeholder="Enter Update Todo Text" 
                value={props.updateTodos} onChange={e=>setValue(e.target.value)}/>
            </div>
            <button className="ui button" type="submit">Update</button>
        </form>
        </div>
        </>
        )
    }


export default Todoformupdate;