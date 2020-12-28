import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import reducer from "./stores/index";
import "../node_modules/semantic-ui-css/semantic.min.css";

ReactDom.render(
    <Provider store={createStore(reducer,applyMiddleware(thunk))}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>
,document.getElementById("root"));