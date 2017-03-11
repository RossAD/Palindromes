import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Input from './components/Input.js';
import Result from './components/Result.js';
import Header from './components/Header.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: [],
    }
  }

/*
 *Check if word is a palendrome
 */
  isPal = (word) => {
    //Regular expression to check for any non-character symbols
    const reg = /[.,/#!$%?^&*;:{}=\-_`~()/\n]/g;

    const palArr = word.toUpperCase().replace(reg,'').split('');
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

/*
 *Handle changes to input box
 */
  handleChange = (event) => {
   this.setState({input: event.target.value});
   this.createResult(this.state.input);
  }

/*
 *Convert input string to array
 */
  createResult = () => {
    //Regular expression to check for returns or spaces
    const reg = /[\n\s]/g;

    const result = this.state.input.split(reg);
   this.setState({result: result});
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Input
          handleChange={this.handleChange}
          createResult={this.createResult}
        />
        <Result
          isPal={this.isPal}
          result={this.state.result}
        />
      </div>
    );
  }
}

export default App;
