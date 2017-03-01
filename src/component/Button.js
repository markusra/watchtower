import React, {Component} from 'react';
import Radium from 'radium';

type Props = {
  disabled: boolean,
  action: String
};

class Button extends React.Component {
  handleClick = () => {
    console.log('Button triggered!');
  };

  render() {
    return (
      <button
        disabled={this.props.disabled}
        style={[styles.base,
        this.props.disabled && styles.disabled]}
        onClick={() => this.handleClick()}>
        {this.props.children}
      </button>
    );
  }
}

module.exports = Radium(Button);

const styles = {
    base: {
      width: '7em',
      textAlign: 'center',
      padding: '0.5em',
      color: '#fff',
      backgroundColor: '#658C98',
      border: '2px solid #fff',
      cursor: 'pointer',
      userSelect: 'none',
      fontSize: '14',

      ':hover': {
        background: '#205362'
      },
      ':active': {
        background: '#205362'
      }

    },
    disabled: {
      opacity: .4,
      cursor: "not-allowed"
    }
};
