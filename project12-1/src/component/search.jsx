import React, {useState} from "react";
const Searchdata =(props)=>{
    const [search,setSearch]=useState();
    
const getSearch=(e)=>{
    e.preventDefault();
    props.searchop(search);

}

        return(
            <React.Fragment>
                <form onSubmit={getSearch}>
                <div className="ui search">
                 <div className="ui icon input">
                 <input type="search" placeholder="Search..." 
                 onChange={(e)=>setSearch(e.target.value)}
                 value={search}
                 />
                <i className="search icon"></i>
                </div>
                </div>
                </form>
                </React.Fragment>
        )
    }
export default Searchdata;