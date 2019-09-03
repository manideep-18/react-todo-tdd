import { inject, observer } from "mobx-react";
import React, { Component } from "react";

import { TodoAppBg } from "./styledComponents";
import TodoButtonComponent from "./TodoButtonComponent";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

@inject("todoStore")
@observer
class TodoApp extends Component {
  todo;

  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  handleTodoItemEdit = (editTodoStatus, todo) => {
    this.setState({ edit: editTodoStatus });
    this.todo = todo;
  };

  handleTodoInputChange = description => {
    this.props.todoStore.addTodo(description);
  };

  handleEditChange = () => {
    this.setState({ edit: !this.state.editTodo });
  };

  handleClearCompleted = () => {
    this.props.todoStore.clearCompleted();
  };

  render() {
    return (
      <TodoAppBg>
        <TodoInput onTodoInput={this.handleTodoInputChange} />
        <TodoList onTodoItemEdit={this.handleTodoItemEdit} />
        <TodoButtonComponent onClearCompleted={this.handleClearCompleted} />
      </TodoAppBg>
    );
  }
}
export default TodoApp;
