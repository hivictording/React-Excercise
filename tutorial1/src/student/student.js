import React, { Component } from "react";
import person from "../static/image/person.jpg";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showImg: true,
    };
  }

  click = (event) => {
    this.setState({
      // ...this.state,
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { name, grade, score } = this.props.student;
    return (
      <article onClick={this.click} className="student">
        <div>
          <img src={person} alt="student"></img>
        </div>

        <h3>Student name: {name}</h3>
        {this.state.showInfo && <h5>Student grade: {grade}</h5>}
        {this.state.showInfo && <h5>Student score: {score}</h5>}
      </article>
    );
  }
}
