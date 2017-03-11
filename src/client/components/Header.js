import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <p className="App-title">
          Palendrome Finder!
        </p>
      </div>
    )
  }
}

module.exports = Header;
