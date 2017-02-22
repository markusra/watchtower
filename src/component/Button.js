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
      width: '10em',
      textAlign: 'center',
      padding: '10px',
      background: '#414141',
      color: '#CCDFCB',
      borderRadius: '10px',
      border: 0,
      cursor: 'pointer',
      userSelect: 'none',

      ':hover': {
        background: '#1D1D1D'
      }

    },
    disabled: {
      opacity: .4,
      cursor: "not-allowed"
    }
};
