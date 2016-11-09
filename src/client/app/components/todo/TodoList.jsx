import React, { PropTypes } from 'react';
import { Todo } from 'components/todo';

function renderTodos (todos, onToggle, onRemove) {
  todos = (todos || []).map(todo => {
    return <Todo
      key={todo.id} {...todo}
      onToggle={() => {onToggle(todo.id);}}
      onRemove={() => {onRemove(todo.id);}}
    />;
  });

  return todos.length ? <ul className="todo-list">{ todos }</ul> : <h4 className="help-text">Nothing Left!</h4>;
}

const TodoList = ({ todos, onToggle, onRemove }) => renderTodos(todos, onToggle, onRemove);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired)
    .isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoList;
