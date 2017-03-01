import React, {Component} from 'react';
import Button from "./Button";

export default class Header extends React.Component {
  render() {
    return (
      <div className="containerDiv" style={styles.header}>
        <ul style={styles.ul}>
          <li style={styles.li}><a href="/" ><img className="logoIMG" style={styles.logo} src={require("../images/icon.png")}/></a></li>
          <li style={styles.li}><Button>Heatmap</Button></li>
        </ul>
      </div>
    );
  }
}

const styles = {
  header: {
    justifyContent: 'space-around',
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
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  },
  li: {
    display: 'inline'
  }
};
