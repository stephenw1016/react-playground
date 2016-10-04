import React, { PropTypes } from 'react';


const Todo = ({ onClick, completed, text, id}) => (
  <li className="todo-list-item" onClick={onClick}>
    <span className="todo-id">{id}</span>
    <span className="todo-text" style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
