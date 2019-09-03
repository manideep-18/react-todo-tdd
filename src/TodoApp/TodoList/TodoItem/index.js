import { observer, inject } from "mobx-react";
import React, { Component } from "react";
import {
  TodoItemTextStrikeoff,
  TodoItemBg,
  TodoItemDeleteButton,
  TodoActiveText,
  CheckBox,
  TodoEachItemBg
} from "./styledComponents";
inject("todo");
@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { click: false, delete: "false" };
  }
  handleCheckBoxClick = () => {
    this.props.todo.setTodoIsCompleted();
    this.setState({ click: !this.state.click });
  };
  handleDoubleClick = () => {
    this.props.onTodoItemEdit(true, this.props.todo);
  };
  handleClick = () => {
    if (window.confirm("Are you sure"))
      this.props.onTodoItemDelete(this.props.todo);
  };
  renderActive = () => {
    return (
      <TodoEachItemBg>
        <CheckBox
          type="checkbox"
          onChange={this.handleCheckBoxClick}
          checked={this.state.click}
        />
        <TodoActiveText onDoubleClick={this.handleDoubleClick}>
          {this.props.todo.todoDescription}
        </TodoActiveText>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
      </TodoEachItemBg>
    );
  };
  renderCompleted = () => {
    return (
      <TodoEachItemBg>
        <CheckBox
          type="checkbox"
          onChange={this.handleCheckBoxClick}
          checked={this.state.click}
        />
        <TodoItemTextStrikeoff>
          {this.props.todo.todoDescription}
        </TodoItemTextStrikeoff>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
      </TodoEachItemBg>
    );
  };
  displayTodo = () => {
    if (this.props.todo.todoIsCompleted) {
      return this.renderCompleted();
    } else {
      return this.renderActive();
    }
  };
  render() {
    return <TodoItemBg>{this.displayTodo()}</TodoItemBg>;
  }
}
export default TodoItem;
