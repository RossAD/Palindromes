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
      palindromes: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.createResult = this.createResult.bind(this);
    this.isPal = this.isPal.bind(this);
  }
/*
 *Check if word is a palendrome
 */
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

  /*
   *addPal(word) {
   *  let temp = this.state.palindromes;
   *  temp.push(word);
   *  this.setState({palindromes: temp});
   *}
   */
/*
 *Handle changes to input box
 */
  handleChange(event) {
   this.setState({input: event.target.value});
   this.createResult(this.state.input);
  }
/*
 *Convert input string to array
 */
  createResult() {
   let result = this.state.input.split(' ');
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
