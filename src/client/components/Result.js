import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p className="Result-header">Results</p>
        <div className="Result-container">
          <p className="Results">
            {this.props.result.map((tag, index) => {
                if(this.props.isPal(tag)){
                  return (<span className="Palindrome" key={index}>{tag} </span>)
                } else {
                  return (<span key={index}>{tag} </span>)
                }
              }
            )}
          </p>
        </div>
      </div>
    )
  }
}

module.exports = Result;
