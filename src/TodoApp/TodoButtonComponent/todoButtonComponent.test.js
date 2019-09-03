import React from "react";
import { Provider } from "mobx-react";
import { render, fireEvent } from "@testing-library/react";
import TodoButtonComponent from ".";
import TodoStore from "../../Stores/Model/TodoStore";
describe("TodoButtonComponent testsuit", () => {
  it("should test ClearCompleted button rendered", () => {
    const todoStore = new TodoStore();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoButtonComponent />
      </Provider>
    );
    const ClearCompletedButton = getByText("Clear Completed");
    expect(ClearCompletedButton).toBeDefined();
  });
  it("should test ClearCompleted handleClick function", () => {
    const todoStore = new TodoStore();
    const onClearCompleted = jest.fn();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoButtonComponent onClearCompleted={onClearCompleted} />
      </Provider>
    );
    const ClearCompletedButton = getByText("Clear Completed");
    fireEvent.click(ClearCompletedButton);
    expect(onClearCompleted).toBeCalled();
  });
});
