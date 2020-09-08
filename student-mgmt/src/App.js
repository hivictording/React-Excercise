import React, { Component } from "react";

// import components
import Header from "./components/header";
import AddForm from "./components/add-form";
import SearchForm from "./components/search-form";
import Info from "./components/info";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <AddForm />
        <SearchForm />
        <Info />
      </>
    );
  }
}
