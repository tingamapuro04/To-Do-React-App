import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      background: '#fefef1',
      borderBottom: '2px #ccc solid',
      padding: '10px',
      textDecoration: this.props.todos.completed ? 'line-through' : 'none'
    }
  }


  render() {
    const { id, title } = this.props.todos
    return (
      <div style={ this.getStyle() }>
        
        <p> <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}></input> { this.props.todos.title }</p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todos: propTypes.object.isRequired
}

export default Todoitem
