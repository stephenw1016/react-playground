import { connect } from 'react-redux';

import { toggleTodo } from 'actions/todo.actions';
import { removeTodo } from 'actions/todo.actions';
import { TodoList } from 'components/todo';
import TodoService from 'service/todo.service';

let todoService = new TodoService();

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id));
      todoService.get(id + 1).subscribe(todo => {
        todoService.update(todo);
      });
    },
    onRemove: (id) => {
      dispatch(removeTodo(id));
      todoService.remove(id);
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
