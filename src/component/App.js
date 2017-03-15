import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import Map from "./Map";
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          Test
        </Header>
          <Container title="Watchtower: Heatmap">
          <Map/>
          <div id="slider"/>
        </Container>
      </div>
    );
  }

  componentDidMount(){
      window.renderSlider();
  }

}

export default App;
