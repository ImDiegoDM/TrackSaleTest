import * as React from "React";
import { IStock } from "../../Interfaces/IStock";
import { Link } from "react-router-dom";

export class Stock extends React.Component<IStock>{

  render():any{
    return (
      <Link className="stockContainer col-4" to={'/'+this.props.stock.symbol}>
        <div className="stock px-3 py-1">
          <h2 className="symbol">{this.props.stock.symbol}</h2>
          <p className="size">size {this.props.stock.size}</p>
          <p className="price">${this.props.stock.price}</p>
        </div>
      </Link>
    );
  }
}