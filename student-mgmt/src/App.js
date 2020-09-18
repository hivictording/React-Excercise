import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import DataProvider from "./context";

// import components
import Header from "./components/header";
import MainPage from "./pages/main";
import StudentsPage from "./pages/students";
import DepartmentsPage from "./pages/departments";

const fontSecondary = "assistant-regular";
const fontPrimary = "kufam-regular";

const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: calc(0.95em + 0.9vw);
}

*,
*::after,
*::before {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body {
  font-family: ${fontSecondary};
}
`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
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
      </>
    );
  }
}
