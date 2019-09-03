import React from "react";
import { Provider } from "mobx-react";
import { render, fireEvent } from "@testing-library/react";

import Todo from "../../../Stores/Model/Todo";
import TodoStore from "../../../Stores/Model/TodoStore";
import TodoInput from "../../TodoInput";
import TodoItem from ".";

describe("Todoitems testsuit", () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  it("sholud test text strike-off with checkbox tick", () => {
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
    const todoStore = new TodoStore();
    todo.setTodoDescription("todo");
    const { getByText, getByPlaceholderText } = render(
      <Provider todoStore={todoStore}>
        <TodoItem todo={todo} todoStore={todoStore} />
      </Provider>
    );
    const editedText = getByText(todo.todoDescription);
    fireEvent.doubleClick(editedText);
    const editInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(editInput, { target: { value: "todo-edited" } });
    fireEvent.keyDown(editInput, { key: "Enter", code: 13 });
    expect(todo.todoDescription).toBe("todo-edited");
  });

  it("should test todoDelete on closeIcon click", () => {
    const todoItemDelete = jest.fn();
    window.confirm = jest.fn(() => true);
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
