import { Provider } from "mobx-react";
import React from "react";
import TodoApp from "./TodoApp";
import Todo from "./Stores/Model/Todo";
import TodoStore from "./Stores/Model/TodoStore";
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
