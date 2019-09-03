import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {
  TodoButtonComponentBg,
  TodoClearCompletedButton
} from "./styledComponents";
import TodoFilters from "./TodoFilters";
@inject("todoStore")
@observer
class TodoButtonComponent extends Component {
  handleClick = () => {
    this.props.onClearCompleted();
  };
  render() {
    return (
      <TodoButtonComponentBg>
        {this.props.todoStore.todosItemsLeft > 0 ? (
          <>{this.props.todoStore.todosItemsLeft} items left</>
        ) : (
          ""
        )}
        <TodoFilters todoFiltersText="All" />
        <TodoFilters todoFiltersText="Active" />
        <TodoFilters todoFiltersText="Completed" />
        <TodoClearCompletedButton onClick={this.handleClick}>
          Clear Completed
        </TodoClearCompletedButton>
      </TodoButtonComponentBg>
    );
  }
}
export default TodoButtonComponent;
