import React, { Component } from "react";
import styled, { css } from "styled-components";

import StudentMenu from "../components/students/menu";
import AddStudentForm from "../components/students/add-form";
import SearchStudentForm from "../components/students/search-form";
import StudentInfo from "../components/students/info";

// CSS Helper
const stuInfoHover = css`
  font-size: 0.65rem;
  & .single-student:hover {
    background: darkgray;
  }
`;

const StudentInfoWrapper = styled.div`
  ${stuInfoHover}
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
          <StudentInfoWrapper>
            <StudentInfo />
          </StudentInfoWrapper>
        </div>
      </main>
    );
  }
}
