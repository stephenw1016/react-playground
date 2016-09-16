import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'styles/main.scss';

import { Contacts } from 'components/contacts';

import { Likes } from 'components/likes';

import todoApp from 'reducers/todo';
import { AddTodo, VisibleTodoList } from 'components/containers';
import { Footer } from 'components/todo';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from 'actions/todo.actions';


let contacts = [
  { name: "Tony Romo", email: "tromo@dallascowboys.com" },
  { name: "Dez Bryant", email: "dbryant@dallascowboys.com" },
  { name: "Dak Prescott", email: "dprescott@dallascowboys.com" },
  { name: "Dan Bailey", email: "dbailey@dallascowboys.com" },
  { name: "Jason Witten", email: "jwitten@dallascowboys.com" },
  { name: "Jerry Jones", email: "jjones@dallascowboys.com" }
];

let store = createStore(todoApp);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Setup
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

// Stop listening to state updates
// unsubscribe();

class App extends Component {
  render () {
    return (
      <div>
        <Contacts contacts={contacts} />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Likes />
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
