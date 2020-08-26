import React from "react";
import Person from "../person";

export default ({ data }) => (
  <div>
    {data.map((item, index) => (
      <Person {...item} key={index}>
        <h2>This is a child element {index}</h2>
      </Person>
    ))}
  </div>
);
