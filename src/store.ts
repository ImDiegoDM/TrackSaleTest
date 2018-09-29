import { createStore,applyMiddleware } from "redux";

import reducer from "./reducers/index"; 
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const middlware = applyMiddleware(promise(),logger);

export default createStore(reducer,middlware);