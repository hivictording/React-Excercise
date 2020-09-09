import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DataProvider from "./context";

// import components
import Header from "./components/header";
import MainPage from "./pages/main";
import StudentsPage from "./pages/students";
import DepartmentsPage from "./pages/departments";

export default class App extends Component {
  render() {
    return (
      <Router>
        <DataProvider>
          <Header />

          {/* Routing */}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/students" component={StudentsPage} />
            <Route exact path="/departments" component={DepartmentsPage} />
          </Switch>
        </DataProvider>
      </Router>
    );
  }
}
