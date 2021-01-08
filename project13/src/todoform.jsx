import React,{useState} from "react";

const Todoform =(props)=>{
    const [value, setValue] = useState("");
    const handleFormData=(e)=>
    {
        e.preventDefault();
        if(!value){return null;}
        props.adddata(value);
        setValue("");
    }
    return(
        <>
        <form className="ui form" onSubmit={handleFormData}>
            <div className="field">
                <label>New Todo</label>
                <input type="text" name="first-name" placeholder="Enter New Todo Text" 
                value={value} onChange={e=>setValue(e.target.value)}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
        </>
    )
}
export default Todoform;