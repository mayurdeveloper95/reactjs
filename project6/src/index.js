import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "../node_modules/semantic-ui-css/semantic.min.css";
import App from "./app";

ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById("root"));