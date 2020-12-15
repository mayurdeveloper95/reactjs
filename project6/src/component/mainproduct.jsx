import React from "react";
const Mainproduct=(props)=>{
return(
    <React.Fragment>
        <div class="ui container">
    <h1>Main Product {props.match.params.id}</h1>
    <h4>Product Price:{props.match.params.price}</h4>
    <h4>Product Quantity:{props.match.params.quantity}</h4>
    <button class="ui primary button" onClick={()=>props.history.push("/products")}>
    previous
    </button>
    </div>
</React.Fragment>
)
}
export default Mainproduct;