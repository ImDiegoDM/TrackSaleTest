import * as React from "React";
import { CloseGraph } from "../Graph/CloseGraph";

export class StockInfo extends React.Component<any>{

  render():any{
    let quote = this.props.stock.quote;
    let quoteClass = "change "+(quote.change<0 ? "red":"green");
    let company = this.props.stock.company;
    let news = this.props.stock.news.map((item:any)=>{
      return (
        <a href={item.url}>
          <h5>{item.headline}</h5>
          <div>{item.summary}</div>
        </a>
      );
    });

    return(
    <div className="container stock" id="stock">
      <h3>{quote.companyName}<span className="symbol">({quote.symbol})</span></h3>
      <h2>{quote.close} <span className={quoteClass}>{quote.change}({Math.round((quote.changePercent*100)*100)/100}%)</span></h2>
      <CloseGraph chartData={this.props.stock.chart} width={600}></CloseGraph>
      <div className="profile my-4">
        <h3>Profile</h3>
        <div>{company.description}</div>
        <h5 className="mt-3">Website</h5>
        <b><a href={company.website}>{company.website}</a></b>
      </div>
      <div className="news my-4">
        <h3>News</h3>
        {news}
      </div>
    </div>
    ) ;
  }
}