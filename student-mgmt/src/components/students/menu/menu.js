import React, { Component } from "react";

export default class StudentMenu extends Component {
  render() {
    return (
      <div className="student-menu d-flex justify-content-around my-2">
        <button className="btn-active btn btn-info btn-sm text-capitalize">
          add/edit student
        </button>
        <button className="btn btn-info btn-sm text-capitalize">
          search student
        </button>
      </div>
    );
  }
}
