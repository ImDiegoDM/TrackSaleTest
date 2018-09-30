import * as React from "react";
import * as d3 from "d3";

export class CloseGraph extends React.Component<any,any>{

  margin = {top: 30, right: 20, bottom: 30, left: 50};
  width:number;
  height:number;
  aspect=0.3;
  data:any[] = [];

  calculateWidthAndHeight(){
    let containerWidth = document.getElementById('closeGraph').offsetWidth
    this.width =  containerWidth - this.margin.left - this.margin.right;
    this.height = containerWidth * this.aspect - this.margin.top - this.margin.bottom;
  }

  componentWillMount(){
    window.addEventListener('resize',()=>{
      this.calculateWidthAndHeight();
      this.drawGraph();
    });
  }
  
  componentDidMount(){
    this.calculateWidthAndHeight();
    this.mapData();
    this.drawGraph();
  }

  drawGraph(){
    let x = d3.scaleTime().range([0, this.width]);
    let y = d3.scaleLinear().range([this.height, 0]);

    let valueline = d3.line()
    .x(function(d:any) { return x(d.date); })
    .y(function(d:any) { return y(d.close); });

    d3.select("#closeGraph svg").remove();

    let svg = d3.select("#closeGraph").append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform","translate(" + this.margin.left + "," + this.margin.top + ")");

    x.domain(d3.extent(this.data, function(d) { return d.date; }));
    y.domain(d3.extent(this.data, function(d) { return d.close; }));

    svg.append("path")
    .data([this.data])
    .attr("class", "line")
    .attr("d", valueline);

    svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x));
    
    svg.append("g")
    .call(d3.axisLeft(y));
  }

  // map chartdata to render properly
  mapData(){
    this.data = this.props.chartData.map((item:any)=>{
      return {date:new Date(item.date),close:item.close}
    });
  }

  render():any{
    return <div id="closeGraph"></div>
  }
}