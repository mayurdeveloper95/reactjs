import React from "react";
import {Link} from "react-router-dom";
const Navigate=()=>{
return(
    <React.Fragment>
        <div className="ui inverted menu">
           <Link className="active item" to="/home">Home</Link >
            <Link className="item" to="/products">Products</Link >
            <Link className="item" to="/admin">Admin</Link >
          <Link className="item" to="/contact">Contact</Link >
            </div>

        </React.Fragment>
)
}
export default Navigate;