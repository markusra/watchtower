import React, {Component} from 'react';


const Button = ({buttonText}) => (
  <div className="buttonDiv" style={style}>
    {buttonText}
  </div>
);

export default Button;

const style = {
  textAlign: 'center',
  padding: '10',
  backgroundColor: '#414141',
  borderRadius: '10',
  border: '1px solid black'
}
