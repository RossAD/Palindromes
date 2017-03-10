import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input className="textInput" onChange={this.props.handleChange}
      onKeyUp={this.props.createResult} />
    )
  }
}

module.exports = Input;
