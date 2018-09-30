import * as React from "React";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SearchBar extends React.Component<any,any>{

  render():any{
    return (
      <div className="search">
      <div className="container">
        <div className="icon">
          <FontAwesomeIcon icon="search"/>
        </div>
        <div className="form-group mx-3 searchField">
          <input type="email" value={this.props.searchValue} onChange={this.props.search} className="form-control" id="search" placeholder="Search for a specific stock"/>
          {this.props.children}
        </div>
      </div>
      </div>
    );
  }
}