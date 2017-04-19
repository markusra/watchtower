import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import Map from "./Map";
import Header from "./Header";
import Slider from "./Slider";
import Search from './Search';

const styles = {
  mainDiv: {
    minWidth: '500px'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.mainDiv}>
        <Header>
          Test
        </Header>
          <Container>
            <Search/>
            <Map/>
            <Slider/>
        </Container>
      </div>
    );
  }

}

export default App;
