import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import reducers from "./stores/store";
import thunk from "redux-thunk";
import "../node_modules/semantic-ui-css/semantic.min.css";


ReactDom.render(
<Provider store={createStore(reducers,applyMiddleware(thunk))}>
<App/>
</Provider>,document.getElementById("root"));