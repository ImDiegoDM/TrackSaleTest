import { combineReducers } from "redux";

import stocks from "./Stocks";
import symbols from "./Symbols";

export default combineReducers({
  stocks,
  symbols
});