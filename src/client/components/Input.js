import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="Input-container">
        <p className="Input-header">Enter text to find palindromes</p>
        <textarea
          className="Text-input"
          onChange={this.props.handleChange}
          onKeyUp={this.props.createResult}
        />
      </div>
    )
  }
}

module.exports = Input;
