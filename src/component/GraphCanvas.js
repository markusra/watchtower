import React, {Component} from "react";

const styles = {
  chart: {
    marginTop: 20,
    marginBottom: 40,
    padding: 15
    //border: '2px solid #205362'
  },
  graphDiv: {
    width: '93%'
  }
};

export default class GraphCanvas extends Component{
  render() {
    return(
      <div id="graphDiv" style={styles.graphDiv}>
        <canvas id="myChart" style={styles.chart}></canvas>
      </div>
    )
  }

  componentDidMount(){
    console.log("myChart component mounted");
  }
}
