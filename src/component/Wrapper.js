import React from 'react';

const styles = {
  container: {
    zIndex: 1,
    textAlign: 'center',
    paddingBottom: 20,
    width: '55%',
    border: '2px solid #205362',
    background: '#fff',
    margin: '0px auto',
    height: '100%',
    paddingTop: '7.2em'
  }
};

export default class Container extends React.Component {
  render() {
    return (
      <div className="wrapperDiv" style={styles.container}>
          {this.props.children}
      </div>
    );
  }
}
