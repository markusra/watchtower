import React from 'react';

const styles = {
  container: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '90%',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20
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
