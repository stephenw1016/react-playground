import React, { PropTypes } from 'react';
import { Todo } from 'components/todo';

function renderTodos (todos, onTodoClick) {
  todos = (todos || []).map(todo => {
    return <Todo key={todo.id} {...todo} onClick={() => {onTodoClick(todo.id);}} />;
  });

  return todos.length ? <ul className="todo-list">{ todos }</ul> : <h4 className="help-text">Nothing Left!</h4>;
}

const TodoList = ({ todos, onTodoClick }) => (renderTodos(todos, onTodoClick));

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
