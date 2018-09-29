import * as React from "React";
import { IStock } from "../Interfaces/IStock";

export class Stock extends React.Component<IStock>{

  render():any{
    return (
      <div className="stock col-4">
        <h2 className="symbol">{this.props.stock.symbol}</h2>
        <p className="size">{this.props.stock.size}</p>
        <p className="price">{this.props.stock.price}</p>
      </div>
    );
  }
}