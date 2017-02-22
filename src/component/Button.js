import React, {Component} from 'react';
import Radium from 'radium';

class Button extends React.Component {
  render() {
    return (
      <button disabled={this.props.disabled} style={[styles.base,
        this.props.disabled && styles.disabled]}>
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
      padding: '10',
      background: '#414141',
      color: '#CCDFCB',
      borderRadius: '10',
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
