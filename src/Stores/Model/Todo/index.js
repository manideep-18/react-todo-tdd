import { action, observable } from "mobx";
var id = 0;
class Todo {
  todoId = 0;
  @observable todoDescription;
  @observable todoIsCompleted;
  constructor() {
    this.todoId = id++;
    this.todoDescription = "";
    this.todoIsCompleted = false;
  }
  @action setTodoDescription = description => {
    this.todoDescription = description;
  };
  @action setTodoIsCompleted = () => {
    this.todoIsCompleted = !this.todoIsCompleted;
  };
}
export default Todo;
