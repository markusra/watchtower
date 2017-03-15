import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import Map from "./Map";
import Header from "./Header";
import Slider from "./Slider";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          Test
        </Header>
          <Container title="Watchtower: Heatmap">
            <Map/>
            <Slider/>
        </Container>
      </div>
    );
  }

}

export default App;
