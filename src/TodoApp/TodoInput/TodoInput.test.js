import { Provider } from "mobx-react";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoStore from "../../Stores/Model/TodoStore";
import TodoInput from ".";

describe("TodoInput Testsuit", () => {
  let todoStore, todoInputChange;

  beforeEach(() => {
    todoStore = new TodoStore();
    todoInputChange = jest.fn();
  });

  it("should test TodoInputBox is rendered", () => {
    const { getByPlaceholderText } = render(
      <Provider todoStore={todoStore}>
        <TodoInput />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    expect(todoInput).toBeDefined();
  });

  it("should test TodoInputBox handleKeyDown with value null&tab&emptytype characters", () => {
    const { getByPlaceholderText } = render(
      <Provider todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "  " } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledTimes(0);
  });

  it("should test entered text to pass to parent component ", () => {
    const { getByPlaceholderText } = render(
      <Provider todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledWith("learn tdd");
  });

  it("should test inputBox empty after entering text", () => {
    const { getByPlaceholderText } = render(
      <Provider todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInput.value).toBe("");
  });
});
