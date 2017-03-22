import React from 'react';
import Button from "./Button";

const styles = {
  container: {
    display: '-webkit-flex',
    display: 'flex',
    marginBottom: 10,
    width: '100.5%',
    textAlign: 'left'
  },
  inputDiv: {
    flex: 2,
    paddingRight: 20
  },
  buttonDiv: {
    flex: 1
  },
  inputField: {
    width: '100%',
    fontSize: '14px',
    border: '2px solid #205362',
    padding: '0.5em',
    textAlign: 'center',
    color: '#205362'
  }
};

export default class Search extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputDiv}>
          <input type="text" style={styles.inputField} placeholder="Type a filter word"/>
        </div>
        <div style={styles.buttonDiv}>
          <Button kind="search" style={styles.button}>Show Heatmap</Button>
        </div>
      </div>
    );
  }
}
