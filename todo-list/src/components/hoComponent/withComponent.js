import React from "react";

// higher order component
export function withComponent(Component, name) {
  return function subcomponent(props) {
    return <Component {...props} name={name} />;
  };
}
