import axios from "axios";
import env from '../env';

export function fetchStock(stock:string){
  return {
    type:"FETCH_STOCK",
    payload: axios.get(env.url+'/stock/'+stock+'/batch?types=quote,news,company,chart&range=1m&last=1')
  }
}