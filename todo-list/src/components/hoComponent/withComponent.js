import React from "react";

export function withComponent(Component, name) {
  return function subcomponent(props) {
    return <Component {...props} name={name} />;
  };
}
