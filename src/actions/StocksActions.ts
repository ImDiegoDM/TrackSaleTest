import axios from "axios";
import env from '../env';

export function fetchStocks(){
  return {
    type:"FETCH_STOCKS",
    payload: axios.get(env.url+'tops/last')
  }
}