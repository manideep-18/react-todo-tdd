import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { TodoAppBg } from "./styledComponents";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoButtonComponent from "./TodoButtonComponent";
@inject("todoStore", "todo")
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
        {this.state.edit ? (
          <>
            <TodoInput
              edit={this.state.edit}
              todo={this.todo}
              onTodoInput={this.handleTodoInputChange}
              onTodoEdit={this.handleEditChange}
            />
          </>
        ) : (
          ""
        )}
        <TodoList onTodoItemEdit={this.handleTodoItemEdit} />
        <TodoButtonComponent onClearCompleted={this.handleClearCompleted} />
      </TodoAppBg>
    );
  }
}
export default TodoApp;
