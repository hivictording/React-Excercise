import React, { Component } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

export default class App extends Component {
  render() {
    return (
      <>
        <TodoForm />
        <TodoList />
      </>
    );
  }
}
