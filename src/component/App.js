import React, { Component } from 'react';
import './App.css';
import Button from "./Button.js"
import ContentContainer from "./Container.js"
import styleContainer from "./Container.js"

const style = {
  textAlign: 'center',
  padding: '10',
  borderRadius: '10',
  width: '70%',
  border: '3px solid black'
}

function Container(props) {
  return (
     <div className="container" style={style}>
       {props.children}
     </div>
   );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <Container>
            WatchTower
            <input type="text" name="searchInput" className="searchInput" placeholder="Søk"/>
            <button>Fra</button>
            <button>Til</button>
            <Button
              buttonText = "Søk"
              />
            </Container>
        </div>
      </div>
    );
  }
}

export default App;
