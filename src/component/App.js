import React, { Component } from 'react';
import './App.css';
import Wrapper from "./Wrapper";
import Container from "./Container";
import Map from "./Map";
import Header from "./Header";
import Slider from "./Slider";
import Search from './Search';
import TimeAndDay from './TimeAndDay';
import GraphCanvas from "./GraphCanvas";

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
        <Wrapper>
          <Container>
            <Search/>
            <Map/>
            <Slider/>
            <TimeAndDay/>
            <GraphCanvas/>
          </Container>
        </Wrapper>
      </div>
    );
  }

}

export default App;
