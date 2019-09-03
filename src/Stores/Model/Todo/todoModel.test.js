import Todo from ".";

describe("TodoModel testsuit", () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  it("should test setTodoDescription ", () => {
    todo.setTodoDescription("learn-tdd");
    expect(todo.todoDescription).toBe("learn-tdd");
  });

  it("should test setTodoIscompleted", () => {
    todo.setTodoIsCompleted();
    expect(todo.todoIsCompleted).toBe(true);
  });
});
