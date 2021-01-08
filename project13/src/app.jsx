import React, { Component } from "react";
import Navigation from "./navigation";
import {Switch,Route} from "react-router-dom";
import Todo from "./todo";
import Todoformupdate from "./todoformupdate";
class App extends Component{
    render()
    {
        return(
        <>
          <Navigation/>
        <Switch>
            <Route path="/" exact component={Todo}/>
            <Route path="/todo" exact component={Todo}/>
            <Route path="/:id/update" exact component={Todoformupdate}/>
            
        </Switch>
        </>
        )
    }
}

export default App;