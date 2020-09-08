import React, { Component } from "react";

import { withComponent } from "../hoComponent";

// export default class TodoForm extends Component {
//   render() {
//     return <div>Hello from todoForm</div>;
//   }
// }

const todoForm = (props) => {
  console.log(props);
  return (
    <h3>
      Hello from {props.name2} {props.name}
    </h3>
  );
};

// higher order component
export default withComponent(todoForm, "NSSP");
