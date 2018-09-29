import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Route } from "react-router-dom";

import { Stocks } from "./components/Stocks";

import store from "./store";


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route exact={true} path="/" component={Stocks}/>
      </Router>
    </Provider>,
    document.getElementById("app")
);