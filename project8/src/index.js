import React from "react";
import ReactDom from "react-dom";
import App from "./Components/app";
import reducers from "./Stores/index";
import {Provider} from "react-redux";
import {createStore} from "redux";
import "../node_modules/semantic-ui-css/semantic.min.css";
ReactDom.render(
    <Provider store={createStore(reducers)}>
<App/>
</Provider>
,document.getElementById("root"));