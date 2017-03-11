import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p className="Result-header">Results</p>
        <div className="Result-container">
          <p className="Results">
            {this.props.result.map((tag, index) => {
                return (<span className={this.props.isPal(tag) ? "Palindrome" : ""} key={index}>{tag} </span>)
              }
            )}
          </p>
        </div>
      </div>
    )
  }
}

module.exports = Result;
