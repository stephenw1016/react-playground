import { combineReducers } from 'redux';

import todos from 'reducers/todo/todos';
import visibilityFilter from 'reducers/todo/visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
