import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <>
      <h1>
        {new Date().getFullYear()} - {new Date().getMonth()} -{" "}
        {new Date().getDate()}
      </h1>
      <h1>This is my react test</h1>
    </>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
