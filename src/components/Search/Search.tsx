import * as React from "React";
import { connect } from "react-redux";
import { fetchSymbols,search,cancelSearch,typeSearch } from "../../actions/SymbolsActions";

import { Debounce } from "../../helper";

import { SearchBar } from "./SearchBar";
import { Results } from "./Results";

@connect((store:any)=>{
  return {
    symbols:store.symbols
  }
})
export class Search extends React.Component<any>{
  debounce?:Debounce

  constructor(props:any){
    super(props);
    this.debounce = new Debounce(300);
    
  }
  componentWillMount?(){
    this.props.dispatch(fetchSymbols())
  }

  search?(value:string){
    this.props.dispatch(typeSearch(value));
    this.debounce.call(()=>{
      this.props.dispatch(search())
    })
  }

  clearSearch?(){
    this.props.dispatch(cancelSearch());
  }

  typeSearch?(value:string){
    
  }

  render():any{
    return (
      <div>
        <SearchBar 
          searchValue={this.props.symbols.searchValue} 
          search={(event:any)=>{this.search(event.target.value)}}>

            <Results values={this.props.symbols.searchResult} clearSearch={()=>{this.clearSearch()}}></Results>

        </SearchBar>
      </div>
    );
  }
}