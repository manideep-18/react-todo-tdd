import Todo from ".";

describe("TodoModel testsuit", () => {
  it("should test setTodoDescription ", () => {
    const todo = new Todo();
    todo.setTodoDescription("learn-tdd-testing");
    expect(todo.todoDescription).toBe("learn-tdd-testing");
  });
  it("should test setTodoIscompleted", () => {
    const todo = new Todo();
    todo.setTodoIsCompleted();
    expect(todo.todoIsCompleted).toBe(true);
  });
});
