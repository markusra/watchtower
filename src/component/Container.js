import React, {Component} from 'react';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div className="containerTitle" style={styles.containerTitle}>{this.props.title}</div>
        <div className="containerDiv" style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '10',
    borderRadius: '10',
    border: '2px solid #414141',
    background: '#bccfbc',
    marginBottom: 15
  },
  containerTitle: {
    textAlign: 'left',
    padding: '0 0 0.5em 0.5em',
    fontWeight: 'bold'
  }
};
