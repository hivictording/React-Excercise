import React, { Component } from "react";
import Person from "../person";

export default class People extends Component {
  render() {
    const { people } = this.props;
    // console.log(people);
    return people.map((person, index) => (
      <Person key={index} username={person.username} email={person.email} />
    ));
  }
}
