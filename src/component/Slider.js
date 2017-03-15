import React, {Component} from "react";

const styles = {
  slider: {
    marginTop: 40,
    fontSize: 12
  }
};

export default class Slider extends Component{
  render() {
    return(
      <div id="slider" style={styles.slider}></div>
    )
  }

  componentDidMount(){
    console.log("component mounted");
    window.renderSlider();
  }
}


