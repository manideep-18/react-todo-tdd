import { Provider } from "mobx-react";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoStore from "../../Stores/Model/TodoStore";
import TodoButtonComponent from ".";

describe("TodoButtonComponent testsuit", () => {
  let todoStore;

  beforeEach(() => {
    todoStore = new TodoStore();
  });

  it("should test ClearCompleted button rendered", () => {
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoButtonComponent />
      </Provider>
    );
    const ClearCompletedButton = getByText("Clear Completed");
    expect(ClearCompletedButton).toBeDefined();
  });

  it("should test ClearCompleted handleClick function", () => {
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
