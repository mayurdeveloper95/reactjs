import React,{Component} from "react";
import {Link} from "react-router-dom";

class Products extends Component{
    //console.log(props);
    constructor(props)
    {
        super(props);
        this.state={
            products:
            [{
            id:1,
            name:"product 1",
            price:123,
            quantity:20
        },
        {
            id:2,
            name:"product 2",
            price:200,
            quantity:10
        },
        {
            id:3,
            name:"product 3",
            price:499,
            quantity:25
        }
    ]
    }
}
    render(){
    return(
        <React.Fragment>
            
        <div class="ui container">
        <h1>Products Page</h1>
        {
        this.state.products.map((data)=>
        {
            return(
                //parametrized routing
            <div role="list" className="ui list" key={data.id}>
    <Link to={`/product/${data.id}/${data.price}/${data.quantity}`}>
{data.name}
    </Link>
    </div>
            )
        })
    }
    </div>

    </React.Fragment>
    )
}
}
export default Products;