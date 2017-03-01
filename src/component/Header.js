import React, {Component} from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="containerDiv" style={styles.header}>
          <img className="logoIMG" style={styles.logo} src={require("../images/icon.png")}/>
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
    textAlign: 'left',
    position: 'fixed',
    borderBottom: '2px solid #414141',
    background: '#658C98'
  },
  logo: {
    textAlign: 'left',
    color: '#fff',
    height: '3em'

  }
};
