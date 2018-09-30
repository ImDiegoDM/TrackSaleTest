import { ISymbols } from '../Interfaces/ISymbols';



const defaultValue:ISymbols={
  fetching:false,
  fetched:false,
  error:undefined,
  data:[],
  searchResult:[],
  searchValue:''
};

export default <IAction>(state:ISymbols=defaultValue,action:any):ISymbols=>{
 switch(action.type){
  case "FETCH_SYMBOLS_PENDING":{
    return {...state,fetching:true}
  }
  case"FETCH_SYMBOLS_FULFILLED":{
    return {
      ...state,
      fetching:false,
      data:action.payload.data.map((item:any)=>{
        return {symbol:item.symbol,name:item.name}
      })
    }
  }
  case"FETCH_SYMBOLS_REJECTED":{
    return {...state,fetching:false,error:action.payload.message}
  }
  case"TYPING_SEARCH_VALUE":{
    return {...state,searchValue:action.payload}
  }
  case"SEARCH":{
    if(state.searchValue!=''){

      let result = state.data.filter((item)=>{
        return item.symbol.toLowerCase().search(state.searchValue.toLowerCase()) != -1 || item.name.toLowerCase().search(state.searchValue.toLowerCase()) != -1;
      });

      result = result.filter((item,index)=>{
        return index<10;
      });
      return {
        ...state,
        searchResult:result
      }
    }else{
      return {...state,searchResult:[]}
    }
  }
  case"CANCEL_SEARCH":{
    return {...state,searchResult:[],searchValue:''}
  }
 }
  return state;
}