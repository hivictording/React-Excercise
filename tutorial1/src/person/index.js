import React from "react";

export default ({ name, gender, age, children }) => (
  <div className="person">
    <h1>{`My name is ${name},my gender is ${gender} and my age is ${age}`}</h1>
    {children}
  </div>
);
