import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import "../node_modules/semantic-ui-css/semantic.min.css";

ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById("root"));