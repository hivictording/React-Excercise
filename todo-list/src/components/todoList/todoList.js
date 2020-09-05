import React, { Component } from "react";
import TodoItem from "../todoItem";
// import AppContext from "../../context/context";
// import colorProvider, { colorContext, colorConsumer } from "../../context";

export default class TodoList extends Component {
  // static contextType = colorContext;
  render() {
    // let ct = this.context;
    // console.log(this.context.bkColor1);
    return (
      <div>
        Hello from todoList
        <TodoItem />
      </div>
    );
  }
}
