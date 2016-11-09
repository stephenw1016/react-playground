import React, { PropTypes } from 'react';


const Todo = ({ onToggle, onRemove, completed, text, id}) => (
  <li id={'todo-' + id} className="todo-list-item">
    <button className={'button todo-action ' + (completed ? 'todo-complete' : 'todo-incomplete')} onClick={onToggle}></button>
    <span className="todo-text" style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
    <span className="todo-actions">
      <button className="button todo-action todo-remove" onClick={onRemove}></button>
    </span>
  </li>
);

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
