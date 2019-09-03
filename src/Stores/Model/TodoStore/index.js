import { action, observable, computed } from "mobx";

import Todo from "../Todo";

class TodoStore {
  @observable todos = [];
  @observable applyFilterType = "All";

  @action addTodo = description => {
    const todo = new Todo();
    todo.setDescription(description);
    this.todos.push(todo);
  };

  @action deleteTodo = todo => {
    this.todos = this.todos.filter(
      todoEach => todoEach.description !== todo.description
    );
  };

  @action clearCompleted = () => {
    this.todos = this.todos.filter(todoEach => todoEach.isCompleted === false);
  };

  @action setApplyFilterType = filterType => {
    this.applyFilterType = filterType;
  };

  @computed get todosItemsLeft() {
    const todosItemsLeftArray = this.todos.filter(
      todoEach => todoEach.isCompleted === false
    );
    return todosItemsLeftArray.length;
  }

  @computed get appliedFilterList() {
    var todosArray = [];
    if (this.applyFilterType === "Active") {
      todosArray = this.todos.filter(
        todoEach => todoEach.isCompleted === false
      );
    } else if (this.applyFilterType === "Completed") {
      todosArray = this.todos.filter(todoEach => todoEach.isCompleted === true);
    } else {
      todosArray = this.todos;
    }
    return todosArray;
  }
}
export default TodoStore;
