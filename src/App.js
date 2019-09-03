import { Provider } from "mobx-react";
import React from "react";

import Todo from "./Stores/Model/Todo";
import TodoStore from "./Stores/Model/TodoStore";
import TodoApp from "./TodoApp";

const todoStore = new TodoStore();
const todo = new Todo();
class App extends React.Component {
  render() {
    return (
      <>
        <Provider todoStore={todoStore} todo={todo}>
          <TodoApp />
        </Provider>
      </>
    );
  }
}

export default App;
