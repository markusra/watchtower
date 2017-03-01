import React, {Component} from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="containerDiv" style={styles.header}>
          <div className="logoDiv" style={styles.logo}>

          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    zIndex: 2,
    width: '100%',
    height: '3em',
    top: 0,
    left: 0,
    position: 'fixed',
    paddingTop: 10,
    border: '0px 0px 2px 0px solid #414141',
    background: '#658C98'
  },
  logo: {
    textAlign: 'center',
    backgroundImage: 'url("../images/icon.png")'
  }
};
