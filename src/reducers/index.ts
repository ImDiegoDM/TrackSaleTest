import { combineReducers } from "redux";

import stocks from "./Stocks";
import symbols from "./Symbols";
import stock from "./Stock"

export default combineReducers({
  stocks,
  symbols,
  stock
});