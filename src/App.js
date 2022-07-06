import './App.css';
import React, { Component } from 'react';
import Todo from './components/todo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Takeout trash',
        completed: false
      },
      {
        id: 2,
        title: 'Eat something',
        completed: false
      },
      {
        id: 3,
        title: 'Sleep',
        completed: false
      }
    ]
  }


  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
        <Todo todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
