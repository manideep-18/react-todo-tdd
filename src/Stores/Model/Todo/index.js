import { action, observable } from "mobx";

let count = 0;

class Todo {
  id = 0;
  @observable description;
  @observable isCompleted;

  constructor() {
    this.id = count++;
    this.description = "";
    this.isCompleted = false;
  }

  @action setDescription = description => {
    this.description = description;
  };

  @action toggleIsCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };
}
export default Todo;
