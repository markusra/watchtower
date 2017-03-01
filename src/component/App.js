import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import Map from "./Map.js";
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
        </Container>
      </div>
    );
  }
}

export default App;
