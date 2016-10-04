import React, { PropTypes } from 'react';

import { Todo } from 'components/todo';


const TodoList = ({ todos, onTodoClick }) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick} />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired)
    .isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
