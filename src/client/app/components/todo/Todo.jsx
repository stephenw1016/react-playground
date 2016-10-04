import React, { PropTypes } from 'react';


const Todo = ({ onClick, completed, text, id}) => (
  <li className="todo-list-item" onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    <span className="todo-id">{id}</span>
    <span className="todo-text">{text}</span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
