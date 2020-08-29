import React, { Component } from "react";

export default class Person extends Component {
  render() {
    const { username, email } = this.props;
    return (
      <article>
        <h3>{`Username:  ${username}`}</h3>
        <h4>{`Email:  ${email}`}</h4>
      </article>
    );
  }
}
