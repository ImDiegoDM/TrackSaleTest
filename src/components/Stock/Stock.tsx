import * as React from "React";
import { connect } from "react-redux";

import { fetchStock } from "../../actions/StockAction";

import { StockInfo } from "./StockInfo";
import { Elipses } from "../Loader/Elipses";

@connect((store:any)=>{
  return{
    stock:store.stock
  }
})
export class Stock extends React.Component<any>{
  componentWillMount?(){
    this.props.dispatch(fetchStock(this.props.stockId));
  }

  componentDidUpdate?(prevProps:any, prevState:any, snapshot:any){
    if(this.props.stockId!=prevProps.stockId){
      this.props.dispatch(fetchStock(this.props.stockId));
    }
  }

  render():any{
    if(this.props.stock.data){
      return <StockInfo stock={this.props.stock.data}></StockInfo>
    }
    return <Elipses></Elipses>;
  }
}