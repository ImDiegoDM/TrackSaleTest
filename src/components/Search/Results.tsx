import * as React from "React";
import { Link } from "react-router-dom";

export class Results extends React.Component<any>{

  render():any{
    if(this.props.values){
      let resulSearch = this.props.values.map((element:any) => {
        return (
        <Link onClick={this.props.clearSearch} to={'/stocks/'+element.symbol}>
          <li className="list-group-item">
            {element.symbol} - {element.name}
          </li>
        </Link>
        )
      });
      
      
      return (
        <ul className="list-group results">
          {resulSearch}
        </ul>
      );
    }
    else{
      return null;
    }
  }
}