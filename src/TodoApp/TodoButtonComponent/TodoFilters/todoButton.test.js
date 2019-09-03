import React from "react";
import { Provider } from "mobx-react";
import { render, fireEvent } from "@testing-library/react";
import TodoFilters from ".";
import TodoStore from "../../../Stores/Model/TodoStore";
describe("TodoButton testsuit", () => {
  it("should test StyledTodoButton rendered in UI", () => {
    const todoStore = new TodoStore();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoFilters todoFiltersText="All" />
      </Provider>
    );
    const todoButton = getByText("All");
    expect(todoButton).toBeDefined();
  });
  it("should test StyledTodoButton handleClick function ", () => {
    const todoStore = new TodoStore();
    todoStore.setApplyFilterType = jest.fn();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoFilters todoFiltersText="Active" />
      </Provider>
    );
    const todoButton = getByText("Active");
    fireEvent.click(todoButton);
    expect(todoStore.setApplyFilterType).toBeCalled();
  });
});
