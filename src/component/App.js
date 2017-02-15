import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          WatchTower
          <input type="text" name="searcInput" className="searchInput" placeholder="Søk"/>
          <button>Fra</button>
          <button>Til</button>
          <button className="searchButton">Søk</button>
        </div>
      </div>
    );
  }
}

export default App;
