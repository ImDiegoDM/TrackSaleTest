import { IServerData } from '../Interfaces/IServerData';

const defaultValue:IServerData={
  fetching:false,
  fetched:false,
  error:undefined,
  data:[]
};

export default <IAction>(state:IServerData=defaultValue,action:any):IServerData=>{
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