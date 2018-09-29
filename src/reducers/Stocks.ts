import { IStocks } from '../Interfaces/IStocks';
import { IAction } from "../Interfaces/IAction";
import { ReducersMapObject,Reducer } from "redux";

const defaultValue:IStocks={
  fetching:false,
  fetched:false,
  error:undefined,
  data:[]
};

export default <IAction>(state:IStocks=defaultValue,action:any):IStocks=>{
 switch(action.type){
  case "FETCH_STOCKS_PENDING":{
    return {...state,fetching:true}
  }
  case"FETCH_STOCKS_FULFILLED":{
    return {...state,fetching:false,data:action.payload.data.filter(()=>{return true})}
  }
  case"FETCH_STOCKS_REJECTED":{
    return {...state,fetching:false,error:action.payload.message}
  }
 }
  return state;
}