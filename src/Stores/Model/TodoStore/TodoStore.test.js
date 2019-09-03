import Todo from "../Todo";
import TodoStore from ".";

describe("TodoStore testsuit", () => {
  let todoStore;

  beforeEach(() => {
    todoStore = new TodoStore();
  });

  it("should test addTodo function", () => {
    todoStore.addTodo("todo-testing");
    expect(todoStore.todos.length).toBe(1);
    expect(todoStore.todos[0].todoDescription).toBe("todo-testing");
  });

  it("should test deleteTodo function", () => {
    const todo = new Todo();
    todoStore.addTodo("todo-testing");
    todo.setTodoDescription("todo-testing");
    todoStore.deleteTodo(todo);
    expect(todoStore.todos.length).toBe(0);
  });

  it("should test clearCompleted function", () => {
    todoStore.addTodo("todo-testing");
    todoStore.todos[0].setTodoIsCompleted();
    todoStore.clearCompleted();
    expect(todoStore.todos.length).toBe(0);
  });

  it("should test setApplyFilterType", () => {
    todoStore.setApplyFilterType("All");
    expect(todoStore.applyFilterType).toBe("All");
  });

  it("should test todoItemsLeft", () => {
    todoStore.addTodo("todo-testing");
    todoStore.todos[0].setTodoIsCompleted();
    expect(todoStore.todosItemsLeft).toBe(0);
  });

  it("should test for appliedFilterList", () => {
    todoStore.addTodo("learn-tdd");
    todoStore.addTodo("todo-testing");
    todoStore.addTodo("mobx");
    todoStore.todos[1].setTodoIsCompleted();
    todoStore.setApplyFilterType("Active");
    expect(todoStore.appliedFilterList.length).toBe(2);
  });
});
