import React, { Component } from "react";
import styled from "styled-components";

import StudentMenu from "../components/students/menu";
import AddStudentForm from "../components/students/add-form";
import SearchStudentForm from "../components/students/search-form";
import StudentInfo from "../components/students/info";

const StudentInfo2 = styled(StudentInfo)`
  color: red;
  font-size: 0.3rem;
`;

export default class StudentsPage extends Component {
  render() {
    return (
      <main id="students">
        <div className="students-left p-1">
          <StudentMenu />
          <AddStudentForm />
          <SearchStudentForm />
        </div>
        <div className="students-right p-1">
          <StudentInfo2 />
        </div>
      </main>
    );
  }
}
