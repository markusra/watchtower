import React, {Component} from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <a href="/" >
        <img src={require('../images/icon.png')} style={styles.logo}/>
      </a>
    );
  }
}

const styles = {
  logo: {
    left: 0,
    top: 0,
    marginLeft: 20,
    marginTop: 20,
    position: 'fixed'
  }
};
