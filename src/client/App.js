import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.createResult = this.createResult.bind(this);
  }
 isPal(word) {
    let reg = /[.,/#!$%?^&*;:{}=\-_`~()]/g;
    let palArr = word.toUpperCase().replace(reg,'').split('');
    let x = 0;
    let y = palArr.length - 1;
    let result = true;
    while(y >= Math.ceil(palArr.length/2)){
      if(palArr[x] !== palArr[y]){
        result = false;
      }
      x++;
      y--;
    }
    return result;
 }

 handleChange(event) {
   this.setState({input: event.target.value});
   this.createResult(this.state.input);
 }
 createResult() {
   let result = this.state.input.split(' ');
   this.setState({result: result});
 }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           </p>
        </div>
        <input className="textInput" onChange={this.handleChange}
          onKeyUp={this.createResult} />
        <p className="App-intro">
            {this.state.result.map((tag, index) => {
                if(this.isPal(tag)){
                  return (<span style={{color: 'red'}} key={index}>{tag} </span>)
                } else {
                  return (<span key={index}>{tag} </span>)
                }
              }
            )}
        </p>
      </div>
    );
  }
}

export default App;
