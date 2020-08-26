import React, { Component } from "react";

import { studentList } from "../data";
import Student from "../student";

export default class StudentList extends Component {
  render() {
    return (
      <section>
        {studentList.map((student, index) => (
          <Student key={index} {...student} student={student} />
        ))}
      </section>
    );
  }
}
