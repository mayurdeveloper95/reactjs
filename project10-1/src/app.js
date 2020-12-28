import React, { Component } from "react";
import Navigation from "./components/navigation";
import {Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Todolist from "./components/todolist";
import Login from "./components/login";
import Updatetodolist from "./components/updatetodolist";
class App extends Component{
    render()
    {
        return(
        <>
          <Navigation/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/todolist" exact component={Todolist}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/:id/update" exact component={Updatetodolist}/>
        </Switch>
        </>
        )
    }
}

export default App;