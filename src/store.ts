import { createStore,applyMiddleware } from "redux";

import reducer from "./reducers/index"; 

const middlware = applyMiddleware()

export default createStore(reducer,middlware);