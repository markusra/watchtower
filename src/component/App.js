import React, { Component } from 'react';
import './App.css';
import Button from "./Button.js";
import googleMaps from "react-google-map";
import Map from "./Map.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer" >
          WatchTower
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;
