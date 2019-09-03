import React, { Component } from "react";
import { inject } from "mobx-react";
import { TodoInputBg, TodoInputBox } from "./styledComponents";
@inject("todoStore", "todo")
class TodoInput extends Component {
  edit = true;
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleKeyDown = event => {
    const str = this.state.value.trim();
    if (event.key === "Enter") {
      if (str !== "") {
        if (this.props.edit) {
          this.props.todo.setTodoDescription(this.state.value);
          this.props.onTodoEdit();
        } else this.props.onTodoInput(this.state.value);
        this.setState({ value: "" });
      }
      if (this.props.edit && str === "") {
        this.props.todoStore.deleteTodo(this.props.todo);
        this.props.onTodoEdit();
      }
    }
  };
  setValue = () => {
    this.edit = false;
    this.setState({ value: this.props.todo.todoDescription });
  };
  render() {
    return (
      <TodoInputBg>
        {this.props.edit && this.edit ? this.setValue() : ""}
        <TodoInputBox
          value={this.state.value}
          type="text"
          placeholder="what needs to be done..."
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </TodoInputBg>
    );
  }
}
export default TodoInput;
