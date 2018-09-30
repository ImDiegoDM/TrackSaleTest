import { IStock } from '../Interfaces/IStock';

const defaultValue:IStock={
  fetching:false,
  fetched:false,
  error:undefined,
  data:undefined
};

export default <IAction>(state:IStock=defaultValue,action:any):IStock=>{
 switch(action.type){

  case "FETCH_STOCK_PENDING":{
    return {...state,fetching:true}
  }

  case"FETCH_STOCK_FULFILLED":{
    return {...state,fetching:false,data:action.payload.data}
  }

  case"FETCH_STOCK_REJECTED":{
    return {...state,fetching:false,error:action.payload.message}
  }

 }
  return state;
}