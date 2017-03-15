import React from 'react';
import Button from "./Button";

const styles = {
  header: {
    justifyContent: 'space-around',
    zIndex: 2,
    width: '100%',
    height: '3em',
    top: 0,
    left: 0,
    position: 'fixed',
    borderBottom: '2px solid #414141',
    background: '#658C98'
  },
  logo: {
    textAlign: 'left',
    color: '#fff',
    height: '3em'
  },
  menuContent: {
    width: '65%',
    margin: '0 auto'
  },
  buttons: {
    marginTop: '0.5em',
    marginRight: '0.5em',
    float: 'right'
  }

};

export default class Header extends React.Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={styles.menuContent}>
          <ul>
            <li><a href="/" ><img alt="Logo" className="logoIMG" style={styles.logo} src={require("../images/icon.png")}/></a></li>
            <li style={styles.buttons}><Button>Heatmap</Button></li>
          </ul>
        </div>
      </div>
    );
  }
}
