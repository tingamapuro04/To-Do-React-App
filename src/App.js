import './App.css';
import React, { Component } from 'react';
import Todo from './components/todo';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
        <Todo />
      </div>
    )
  }
}

export default App;
