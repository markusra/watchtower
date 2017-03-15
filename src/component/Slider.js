import React, {Component} from "react";

class Slider extends Component{
    render() {
        return(
                <div id="slider"></div>
        )
    }

    componentDidMount(){
        console.log("component mounted");
        window.renderSlider();
    }
}

export default Slider;

