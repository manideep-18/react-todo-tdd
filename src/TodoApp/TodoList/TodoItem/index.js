import { observer } from "mobx-react";
import React, { Component } from "react";

import {
  TodoItemTextStrikeoff,
  TodoItemBg,
  TodoItemDeleteButton,
  TodoActiveText,
  CheckBox,
  TodoEachItemBg
} from "./styledComponents";
import TodoInput from "../../TodoInput";

@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { click: false, edit: false };
  }

  handleCheckBoxClick = () => {
    this.props.todo.toggleIsCompleted();
    this.setState({ click: !this.state.click });
  };

  handleDoubleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleEdit = () => {
    return (
      <TodoInput
        edit={this.state.edit}
        todo={this.props.todo}
        onTodoEdit={this.handleDoubleClick}
      />
    );
  };

  handleClick = () => {
    if (window.confirm("Are you sure you want to delete"))
      this.props.onTodoItemDelete(this.props.todo);
  };

  renderActive = () => {
    return (
      <TodoEachItemBg>
        {this.state.edit ? (
          this.handleEdit()
        ) : (
          <>
            <CheckBox
              type="checkbox"
              onChange={this.handleCheckBoxClick}
              checked={this.state.click}
            />
            <TodoActiveText onDoubleClick={this.handleDoubleClick}>
              {this.props.todo.description}
            </TodoActiveText>
            <TodoItemDeleteButton onClick={this.handleClick}>
              delete
            </TodoItemDeleteButton>
          </>
        )}
      </TodoEachItemBg>
    );
  };

  renderCompleted = () => {
    return (
      <TodoEachItemBg>
        <CheckBox
          type="checkbox"
          onChange={this.handleCheckBoxClick}
          checked={true}
        />
        <TodoItemTextStrikeoff>
          {this.props.todo.description}
        </TodoItemTextStrikeoff>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
      </TodoEachItemBg>
    );
  };

  displayTodo = () => {
    if (this.props.todo.isCompleted) {
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
