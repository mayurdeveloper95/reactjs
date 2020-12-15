import React,{Component} from "react";
import Navigation from "./component/navigation";
import {Redirect, Route,Switch} from "react-router-dom";
import Home from "./component/home";
import Products from "./component/products";
import Admin from "./component/admin";
import Contact from "./component/contact";
import Mainproduct from "./component/mainproduct";
import Notfound from "./component/notfound";

class App extends Component
{
    render()
    {
        return(
            <React.Fragment>
 <Navigation/>
 <Switch>
 <Route path="/products" exact render={(props)=><Products data="angular" {...props}/>}/>
 <Route path="/" exact component={Home}/>
 <Route path="/home" exact component={Home}/>
 <Route path="/admin" exact component={Admin}/>
 <Route path="/contact" exact component={Contact}/>
 <Route path="/product/:id/:price/:quantity" exact component={Mainproduct}/>
 <Route path="/notfound" exact component={Notfound}/>
 <Redirect to="/notfound"/>
</Switch>

</React.Fragment>
        )
    }
}
export default App;
