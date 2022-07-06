import React, { Component } from 'react';



class Todo extends Component {
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
    return (
      <div className="App">
        <h1>Kichwa</h1>
      </div>
    );
  }
}

export default Todo;