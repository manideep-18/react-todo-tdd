import { inject, observer } from "mobx-react";
import React, { Component } from "react";

import { TodoListBg } from "./styledComponents";
import TodoItem from "./TodoItem";

@inject("todoStore")
@observer
class TodoList extends Component {
  handleTodoEditChange = (todoEditStatus, todo) => {
    this.props.onTodoItem(todoEditStatus, todo);
  };

  handleTodoItemDelete = todo => {
    this.props.todoStore.deleteTodo(todo);
  };

  displayTodoList = () => {
    const todosArray = this.props.todoStore.appliedFilterList;
    const todosList = todosArray.map(eachTodo => (
      <TodoItem
        key={eachTodo.todoId}
        todo={eachTodo}
        onTodoItemEdit={this.handleTodoEditChange}
        onTodoItemDelete={this.handleTodoItemDelete}
      />
    ));
    return todosList;
  };

  render() {
    return <TodoListBg>{this.displayTodoList()}</TodoListBg>;
  }
}
export default TodoList;
