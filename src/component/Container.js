import React from 'react';

const styles = {
  container: {
    zIndex: 1,
    textAlign: 'center',
    top: 0,
    paddingTop: 150,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: '60%',
    height: '100%',
    borderRadius: '10px',
    border: '2px solid #205362',
    background: '#fff',
    margin: '0px auto'
  },
  containerTitle: {
    textAlign: 'left',
    padding: '0 0 0.5em 0.5em',
    fontWeight: 'bold'
  }
};

export default class Container extends React.Component {
  render() {
    return (
      <div className="containerDiv" style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
