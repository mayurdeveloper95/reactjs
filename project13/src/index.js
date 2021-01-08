import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import "../node_modules/semantic-ui-css/semantic.min.css";

ReactDom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
,document.getElementById("root"));