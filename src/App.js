import { Provider } from "mobx-react";
import React from "react";

import TodoStore from "./Stores/Model/TodoStore";
import TodoApp from "./TodoApp";

const todoStore = new TodoStore();
class App extends React.Component {
  render() {
    return (
      <>
        <Provider todoStore={todoStore}>
          <TodoApp />
        </Provider>
      </>
    );
  }
}

export default App;
