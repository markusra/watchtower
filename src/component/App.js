import React, { Component } from 'react';
import './App.css';
import Button from "./Button.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          WatchTower
          <input type="text" name="searchInput" className="searchInput" placeholder="Søk"/>
          <button>Fra</button>
          <button>Til</button>
          <Button
            buttonText = "Søk"
            />
        </div>
      </div>
    );
  }
}

export default App;
