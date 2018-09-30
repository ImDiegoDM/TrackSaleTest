import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Stocks } from "./components/Stocks/Stocks";
import { Search } from "./components/Search/Search";

import store from "./store";

library.add(faSearch);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Search></Search>
          <Route exact={true} path="/" component={Stocks}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
);