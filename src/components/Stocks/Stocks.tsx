import * as React from "React";
import { connect,DispatchProp,ConnectedComponentClass } from "react-redux";
import { IStocks } from "../../Interfaces/IStocks";
import { fetchStocks } from "../../actions/StocksActions";
import { Stock } from "./Stock";

@connect((store:any)=>{
  return {
    stocks:store.stocks
  }
})
export class Stocks extends React.Component<any>{
  componentWillMount?(){
    this.props.dispatch(fetchStocks());
  }

  render():any{
    if(this.props.stocks.data.length>0){
      let stocks = [];
      for (let i = 0; i < 20; i++) {
        stocks.push(<Stock stock={this.props.stocks.data[i]}></Stock>);
      }

      return <div className="container">
        <div className="row">
          {stocks}
        </div>
      </div>;
    }
    else{
      return null;
    }
  }
}