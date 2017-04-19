import React from 'react';
import Button from "./Button";

const styles = {
  container: {
    display: '-webkit-flex',
    display: 'flex',
    marginTop: 20,
    marginBottom: 10,
    width: '99.8%',
    textAlign: 'left'
  },
  inputDiv: {
    flex: 1
  },
  selectDiv: {
    flex: 1,
    marginRight: 10
  },
  selectComp: {
    width: '100%',
    height: '2.5em',
    background: '#658C98',
    border: '2px solid #205362',
    fontSize: '14px',
    color: 'white',
    textAlignLast: 'center',
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
    this.numberOnChange = this.numberOnChange.bind(this);
    this.multiplierOnChange = this.multiplierOnChange.bind(this);
    this.state = {buttonDisabled: false};
  }

  componentDidMount(){
    window.show_empty_graph_canvas();
  }

  numberOnChange(event) {
    window.number = event.target.value;
    console.log("Number => " + event.target.value);
  };

  multiplierOnChange(event) {
    window.multiplier = event.target.value;
    console.log("Multiplier => " + event.target.value);
  };

  handleSubmitClick = () => {
    console.log("Graph start...");
    document.getElementById('loading').style.display = 'inline';
    this.setState({buttonDisabled: true});

    const params = {
      word: window.word,
      start: window.minVal,
      end: window.maxVal
    };

    const esc = encodeURIComponent;

    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    const hours = window.number * window.multiplier;
    console.log("Create Graphs => " + hours);

    const url2 = "http://localhost:3000/api/num?" + query + "&interval=" + hours;

    fetch(url2)
      .then(result => {
        result.json().then(d => {
          window.show_graphs(d)
          console.log("Graph finish!");
          document.getElementById('loading').style.display = 'none';
          this.setState({buttonDisabled: false});
        });
      });
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.selectDiv}>
          <select onChange={this.numberOnChange} style={styles.selectComp}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>
        <div style={styles.selectDiv}>
          <select onChange={this.multiplierOnChange} style={styles.selectComp}>
            <option value="1">Hours</option>
            <option value="24" selected="selected">Days</option>
            <option value="168">Week</option>
            <option value="672">Month</option>
          </select>
        </div>

        <div style={styles.buttonDiv}>
          <Button disabled={this.state.buttonDisabled} kind="search" style={styles.button} onclick={this.handleSubmitClick}>Create Graphs</Button>
        </div>
      </div>
    );
  }
}