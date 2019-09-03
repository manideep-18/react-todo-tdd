import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from ".";
import Todo from "../../../Stores/Model/Todo";
import TodoInput from "../../TodoInput";
import { Provider } from "mobx-react";
import TodoStore from "../../../Stores/Model/TodoStore";
describe("Todoitems testsuit", () => {
  it("sholud test text strike-off with checkbox tick", () => {
    const todo = new Todo();
    todo.setTodoDescription("todo");
    todo.setTodoIsCompleted();
    if (todo.todoIsCompleted === true) {
      const { getByText } = render(<TodoItem todo={todo} />);
      const textStrikeoff = getByText(todo.todoDescription);
      expect(textStrikeoff).toBeDefined();
    }
  });
  it("should test onDoubleClick TodoItem", () => {
    const todoItemChange = jest.fn();
    const todo = new Todo();
    const todoStore = new TodoStore();
    todo.setTodoDescription("todo");
    const { getByText } = render(
      <TodoItem
        todo={todo}
        todoStore={todoStore}
        onTodoItemEdit={todoItemChange}
      />
    );
    const editedText = getByText(todo.todoDescription);
    fireEvent.doubleClick(editedText);
    expect(todoItemChange).toBeCalledWith(true, todo);
    const { getByPlaceholderText } = render(
      <Provider todo={todo} todoStore={todoStore}>
        <TodoInput
          editTodo={true}
          description={todo.todoDescription}
          onTodoInput={todoItemChange}
        />
      </Provider>
    );
    const editInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(editInput, { target: { value: "todo-edited" } });
    fireEvent.keyDown(editInput, { key: "Enter", code: 13 });
    expect(todoItemChange).toBeCalledWith("todo-edited");
  });
  it("should test todoDelete on closeIcon click", () => {
    const todoItemDelete = jest.fn();
    window.confirm = jest.fn(() => true);
    const todo = new Todo();
    todo.setTodoDescription("todo");
    const { getByText } = render(
      <TodoItem todo={todo} onTodoItemDelete={todoItemDelete} />
    );
    const deleteButton = getByText("delete");
    fireEvent.click(deleteButton);
    expect(window.confirm).toBeCalled();
    expect(todoItemDelete).toBeCalledWith(todo);
  });
});
