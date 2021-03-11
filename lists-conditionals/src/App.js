import React, { Component } from "react";
import Validation from './Validation/Validation'
import './App.css';
import validation from "./Validation/Validation";

class App extends Component {
 state = {
    userInput:''
  }
  changeHandlerEvent = (event) => {
    this.setState({userInput: event.target.value});
  }
  render(){
      return (
    <div className="App">
      <h1>Rana wagdi</h1>
      {/* create a input with change listener which outputs the length */}
      <input type="text"
             onChange={this.changeHandlerEvent}
             value={this.state.userInput}>

            </input>
            <p>{this.state.userInput}</p>
            <Validation inputLength = {this.state.userInput.length} />
    </div>
  );
  }

}

export default App;
