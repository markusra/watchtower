import React from 'react';
import Button from "./Button";

const styles = {
  container: {
    display: '-webkit-flex',
    display: 'flex',
    marginBottom: 10,
    width: '99.8%',
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

  constructor(props) {
      super(props);
      this.state = {word: ""};
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      window.word = event.target.value;
      this.setState({word: event.target.value});
      if (window.word == "") {
          this.handleSubmitClick();
      }
  }

  handleSubmitClick = () => {

      const params = {
          word: window.word,
          start: window.minVal,
          end: window.maxVal
      };

      const esc = encodeURIComponent;
      const query = Object.keys(params)
          .map(k => esc(k) + '=' + esc(params[k]))
          .join('&');

      const url = "http://localhost:3000/api/tweets/byword?" + query;

      fetch(url)
          .then(result => {
              result.json().then(d => {
                  window.replace_locations(d.data)
              });
          });
  };
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputDiv}>
          <input  type="text" style={styles.inputField} placeholder="Type a filter word" onChange={this.handleChange} value={this.state.word}/>
        </div>
        <div style={styles.buttonDiv}>
          <Button kind="search" style={styles.button} onclick={this.handleSubmitClick}>Filter</Button>
        </div>
      </div>
    );
  }
}
