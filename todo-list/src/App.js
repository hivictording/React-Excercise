import React, { Component } from "react";

import Header from "./components/header";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TodoForm />
        <TodoList />
      </>
    );
  }
}
