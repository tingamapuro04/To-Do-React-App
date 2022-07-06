import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      background: '#fefef1',
      borderBottom: '2px #ccc solid',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={ this.getStyle() }>
        <h1>{ this.props.todo.title }</h1>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: propTypes.object.isRequired
}

export default Todoitem
