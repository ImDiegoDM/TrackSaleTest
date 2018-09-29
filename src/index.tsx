import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";


ReactDOM.render(
  <Provider store={store}>
  </Provider>,
    document.getElementById("app")
);