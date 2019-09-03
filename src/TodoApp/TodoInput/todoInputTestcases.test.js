import React from "react";
import { Provider } from "mobx-react";
import { render, fireEvent } from "@testing-library/react";
import TodoInput from ".";
import Todo from "../../Stores/Model/Todo";
import TodoStore from "../../Stores/Model/TodoStore";
describe("TodoInput Testsuit", () => {
  it("should test TodoInputBox is rendered", () => {
    const todo = new Todo();
    const todoStore = new TodoStore();
    const { getByPlaceholderText } = render(
      <Provider todo={todo} todoStore={todoStore}>
        <TodoInput />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    expect(todoInput).toBeDefined();
  });
  it("should test TodoInputBox handleKeyDown with value null&tab&emptytype characters", () => {
    const todo = new Todo();
    const todoStore = new TodoStore();
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Provider todo={todo} todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "  " } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledTimes(0);
  });
  it("should test entered text to pass to parent component ", () => {
    const todo = new Todo();
    const todoStore = new TodoStore();
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Provider todo={todo} todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledWith("learn tdd");
  });
  it("should test inputBox empty after entering text", () => {
    const todo = new Todo();
    const todoStore = new TodoStore();
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Provider todo={todo} todoStore={todoStore}>
        <TodoInput onTodoInput={todoInputChange} />
      </Provider>
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInput.value).toBe("");
  });
});
