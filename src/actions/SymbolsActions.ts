import axios from "axios";
import env from '../env';

export function fetchSymbols(){
  return {
    type:"FETCH_SYMBOLS",
    payload: axios.get(env.url+'ref-data/symbols')
  }
}

export function search(){
  return{
    type:"SEARCH"
  }
}

export function cancelSearch(){
  return{
    type:"CANCEL_SEARCH"
  }
}

export function typeSearch(value:string){
  return{
    type:"TYPING_SEARCH_VALUE",
    payload:value
  }
}