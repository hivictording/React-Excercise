import React from "react";
import ReactDom from "react-dom";

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
        <Person {...item} key={index} />
      ))}
    </div>
  );
};

const Person = ({ name, gender, age }) => (
  <h1>{`My name is ${name},my gender is ${gender} and my age is ${age}`}</h1>
);

ReactDom.render(<App obj={obj} />, document.getElementById("root"));
