import { action, observable, computed } from "mobx";
import Todo from "../Todo";

class TodoStore {
  @observable todos = [];
  @observable applyFilterType = "All";
  @action addTodo = description => {
    const todo = new Todo();
    todo.setTodoDescription(description);
    this.todos.push(todo);
  };
  @action deleteTodo = todo => {
    this.todos = this.todos.filter(
      eachTodo => eachTodo.todoDescription !== todo.todoDescription
    );
  };
  @action clearCompleted = () => {
    this.todos = this.todos.filter(
      eachTodo => eachTodo.todoIsCompleted === false
    );
  };
  @action setApplyFilterType = filterType => {
    this.applyFilterType = filterType;
  };
  @computed get todosItemsLeft() {
    const todosItemsLeftArray = this.todos.filter(
      eachTodo => eachTodo.todoIsCompleted === false
    );
    return todosItemsLeftArray.length;
  }
  @computed get appliedFilterList() {
    var todosArray = [];
    if (this.applyFilterType === "Active") {
      todosArray = this.todos.filter(
        eachTodo => eachTodo.todoIsCompleted === false
      );
    } else if (this.applyFilterType === "Completed") {
      todosArray = this.todos.filter(
        eachTodo => eachTodo.todoIsCompleted === true
      );
    } else {
      todosArray = this.todos;
    }
    return todosArray;
  }
}
export default TodoStore;
