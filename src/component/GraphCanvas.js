import React, {Component} from "react";

const styles = {
  chart: {
    marginTop: 20,
    marginBottom: 40,
    padding: 15
    //border: '2px solid #205362'
  },
  graphDiv: {
    position: 'relative',
    width: '93%'
  },
  loading: {
    top: '40%',
    marginLeft: -25,
    display: 'none',
    position: 'absolute'
  }
};

export default class GraphCanvas extends Component{
  render() {
    return(
      <div id="graphDiv" style={styles.graphDiv}>
        <img id="loading" width="80" height="80" style={styles.loading} src="reload.gif"></img>
        <canvas id="myChart" style={styles.chart}></canvas>
      </div>
    )
  }

  componentDidMount(){
    console.log("myChart component mounted");
  }
}
