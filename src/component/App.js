import React, { Component } from 'react';
import './App.css';
import Button from "./Button.js";
import googleMaps from "react-google-map";
import Map from "./Map.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          WatchTower
          <Map/>
        </Container>
      </div>
    );
  }
}

export default App;
