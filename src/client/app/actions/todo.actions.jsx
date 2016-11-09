// TODO: determine a default value that makes sense. probably just a random number...
let nextTodoId = 0;

export const addTodo = (todo) => {
  todo = typeof todo === 'object' ? todo : { id: nextTodoId++, text: todo } ;
  return {
    type: 'ADD_TODO',
    id: todo.id,
    text: todo.text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
