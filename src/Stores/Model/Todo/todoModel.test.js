import Todo from ".";

describe("TodoModel testsuit", () => {
  it("should test setTodoDescription ", () => {
    const todo = new Todo();
    todo.setTodoDescription("learn-tdd");
    expect(todo.todoDescription).toBe("learn-tdd");
  });
  it("should test setTodoIscompleted", () => {
    const todo = new Todo();
    todo.setTodoIsCompleted();
    expect(todo.todoIsCompleted).toBe(true);
  });
});
