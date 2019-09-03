import Todo from ".";

describe("TodoModel testsuit", () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  it("should test setTodoDescription ", () => {
    todo.setDescription("learn-tdd");
    expect(todo.description).toBe("learn-tdd");
  });

  it("should test setTodoIscompleted", () => {
    todo.toggleIsCompleted();
    expect(todo.isCompleted).toBe(true);
  });
});
