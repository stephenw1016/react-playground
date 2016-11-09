import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Contacts } from 'components/contacts';
import { Likes } from 'components/likes';
import todoApp from 'reducers/todo';
import { AddTodo, VisibleTodoList } from 'components/containers';
import { Footer } from 'components/todo';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from 'actions/todo.actions';
import TodoService from 'service/todo.service';

import 'styles/main.scss';


let store = createStore(todoApp);
let todoService = new TodoService();

todoService.getAll().subscribe((todo) => {
  store.dispatch(addTodo(todo));
  if (todo.completed) {
    store.dispatch(toggleTodo(todo.id));
  }
});

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

class App extends Component {
  render () {
    return (
      <div className="todo-app">
        <h1>Reactive Todos (w/IndexedDB & Rx.js)</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
