import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { TodoListBg } from "./styledComponents";
import TodoItem from "./TodoItem";
@inject("todoStore", "todo")
@observer
class TodoList extends Component {
  handleTodoEditChange = (editTodoStatus, todo) => {
    this.props.onTodoItemChange(editTodoStatus, todo);
  };
  handleTodoItemDelete = todo => {
    this.props.todoStore.deleteTodo(todo);
  };
  displayTodoList = () => {
    const todosArray = this.props.todoStore.appliedFilterList;
    const todosList = todosArray.map(eachTodo => (
      <div key={eachTodo.todoId}>
        <TodoItem
          todo={eachTodo}
          onTodoItemEdit={this.handleTodoEditChange}
          onTodoItemDelete={this.handleTodoItemDelete}
        />
      </div>
    ));
    return todosList;
  };
  render() {
    return <TodoListBg>{this.displayTodoList()}</TodoListBg>;
  }
}
export default TodoList;
