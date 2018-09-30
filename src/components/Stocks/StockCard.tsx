import * as React from "React";
import { Link } from "react-router-dom";

export class StockCard extends React.Component<any>{

  render():any{
    return (
      <div className="stockContainer col-4">
        <Link to={'/stocks/'+this.props.stock.symbol}>
          <div className="stock-card px-3 py-1">
            <h2 className="symbol">{this.props.stock.symbol}</h2>
            <p className="size">size {this.props.stock.size}</p>
            <p className="price">${this.props.stock.price}</p>
          </div>
        </Link>
      </div>
    );
  }
}