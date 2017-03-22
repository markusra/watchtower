import React from 'react';
import Radium from 'radium';

type Props = {
  disabled: boolean
};

const styles = {
  base: {
    width: '7em',
    textAlign: 'center',
    padding: '0.5em',
    color: '#fff',
    background: '#658C98',
    border: '2px solid #fff',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '14px',

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
  },
  search: {
    minWidth: '10em',
    width: '100%',
    border: '2px solid #205362'
  },
};

class Button extends React.Component {
  handleClick = () => {
    console.log('Button triggered!');
  };

  render() {
    return (
      <button
        kind={this.props.kind}
        disabled={this.props.disabled}
        style={[styles.base, styles[this.props.kind],
        this.props.disabled && styles.disabled]}
        onClick={() => this.handleClick()}
      >
        {this.props.children}
      </button>
    );
  }
}

module.exports = Radium(Button);

