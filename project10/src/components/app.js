import React, { Component } from "react";
import Formdata from "./formdata";
import Login from "./login";
import Navigation from "./navigation";
import {Switch,Route} from "react-router-dom";
import Editformupdate from "./editformupdate";
class App extends Component{
    render()
    {
        return(
            <React.Fragment>
                <Navigation/>
               <Switch>
                <Route path="/" exact component={Formdata}/>
                <Route path="/form" exact component={Formdata}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/:id/update" exact component={Editformupdate}/>
                </Switch>
            </React.Fragment>
        )
    }
}
export default App;