import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Student from "./Student";

const obj = [
  {
    name: "vding",
    age: 45,
    gender: "male",
  },
  {
    name: "mary",
    age: 38,
    gender: "female",
  },
];

// function App({ name, age, gender }) {
const App = ({ obj }) => {
  return (
    <div>
      {obj.map((item, index) => (
        <Person {...item} key={index}>
          <h2>This is a child element {index}</h2>
        </Person>
      ))}
      <Student />
    </div>
  );
};

// Component Child
const Person = ({ name, gender, age, children }) => (
  <div className="person">
    <h1>{`My name is ${name},my gender is ${gender} and my age is ${age}`}</h1>
    {children}
  </div>
);

ReactDom.render(<App obj={obj} />, document.getElementById("root"));
