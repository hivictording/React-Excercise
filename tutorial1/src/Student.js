import React, { Component } from "react";

const studentList = [
  {
    name: "Victor",
    grade: 1,
    score: 90,
  },
  {
    name: "Mario",
    grade: 6,
    score: 100,
  },
  {
    name: "Mary",
    grade: 3,
    score: 80,
  },
];

const hideBook = "hide-book";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: studentList,
    };
  }

  click = (event) => {
    event.currentTarget.classList.toggle(hideBook);
  };

  render() {
    return (
      <section>
        {this.state.students.map((stu, index) => (
          <article
            key={index}
            onClick={this.click}
            className={`book ${hideBook}`}
          >
            <h3>Student name: {stu.name}</h3>
            <h5>Student grade: {stu.grade}</h5>
            <h5>Student score: {stu.score}</h5>
          </article>
        ))}
      </section>
    );
  }
}
