import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions/todo.actions';
import TodoService from 'service/todo.service';

let todoService = new TodoService();

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        let todoText = input.value.trim();
        if (!todoText) {
          return;
        }
        todoService.add(todoText);
        dispatch(addTodo(todoText));
        input.value = '';
      }}>
        <input type="text" placeholder="Task Name" ref={node => {
          input = node;
        }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
