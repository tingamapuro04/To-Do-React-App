import './App.css';
import React, { Component } from 'react';
import Todo from './components/todo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Takeout trash',
        completed: true
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


    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }) })
    }

  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
        <Todo todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
    )
  }
}

export default App;
