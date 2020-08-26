import React from "react";
import ReactDom from "react-dom";

import "./css/index.scss";

import data from "./data";
// using index.js or package.json as the default so you don't specify the specific js file
import StudentList from "./studentList";
import PersonList from "./personList";

// function App({ name, age, gender }) {
const App = () => {
  return (
    <div>
      <PersonList data={data} />
      <StudentList />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
