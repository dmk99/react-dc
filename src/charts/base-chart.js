import * as React from "react";

export default class BaseChart extends React.PureComponent {
  render(){
    return <div ref={chart => this.chart = chart}/>;
  }
}
