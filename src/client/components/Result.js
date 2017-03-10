import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          {this.props.result.map((tag, index) => {
              if(this.props.isPal(tag)){
                return (<span style={{color: 'red'}} key={index}>{tag} </span>)
              } else {
                return (<span key={index}>{tag} </span>)
              }
            }
          )}
        </p>
     </div>
    )
  }
}

module.exports = Result;
