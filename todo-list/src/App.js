import React, { Component } from "react";

import { ColorProvider } from "./context";

import Header from "./components/header";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bkColor1: "lightgreen",
  //     bkColor2: "lightblue",
  //     fontSize: "2em",
  //   };
  // }

  // switchColor = () => {
  //   this.setState({
  //     bkColor1: this.state.bkColor2,
  //     bkColor2: this.state.bkColor1,
  //   });
  // };

  render() {
    return (
      <ColorProvider>
        {/* <colorProvider
      value={{ ...this.state, switchColor: this.switchColor }}
      > */}
        <Header />
        <TodoForm name2="sonicwall" />
        <TodoList />
      </ColorProvider>
    );
  }
}
