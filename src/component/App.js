import React, { Component } from 'react';
import './App.css';
import Logo from "./Logo.js";
import Container from "./Container";
import Map from "./Map.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.mainDiv}>
          <Logo />
          <Container>
            <div style={styles.header}>Watchtower</div>
          </Container>
          <Container title="Heatmap">
            <Map/>
          </Container>
          <Container>
            <div style={styles.header}>Watchtower</div>
          </Container>
          <Container>
            <div style={styles.header}>Watchtower</div>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  mainDiv: {
    display: 'block',
    marginTop: '3em'
  },
  header: {
    fontWeight: 'bold'
  }
};