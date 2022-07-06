import React, { Component } from 'react';
import Todoitem from './todoitem';
import propTypes from 'prop-types';

class Todo extends Component {
  
  render() {
    return this.props.todos.map((todo) => (
      <Todoitem key= { todo.id } todo={ todo }/>
    ))
  }
}

Todo.propTypes = {
  todos: propTypes.array.isRequired
}

export default Todo;