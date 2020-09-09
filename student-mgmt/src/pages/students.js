import React, { Component } from "react";

import AddStudentForm from "../components/students/add-form";
import SearchStudentForm from "../components/students/search-form";
import StudentInfo from "../components/students/info";

export default class StudentsPage extends Component {
  render() {
    return (
      <main>
        <AddStudentForm />
        <SearchStudentForm />
        <StudentInfo />
      </main>
    );
  }
}
