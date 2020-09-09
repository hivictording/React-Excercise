import React, { Component } from "react";

import "./searchStudentForm.scss";
import { Context } from "../../../context/dataContext";

export default class SearchDepartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      director: "",
    };
  }

  static contextType = Context;

  handleChange = (event) => {
    let { searchDepartment } = this.context;
    this.setState({
      [event.target.name]: event.target.value,
    });

    searchDepartment(event.target.value);
  };

  render() {
    return (
      <form id="search-department-form" className="text-center">
        <div className="form-title">Search Department</div>
        <div className="form-group">
          {/* <label htmlFor="search-director">Director</label> */}
          <input
            type="text"
            id="search-director"
            className="form-control"
            name="director"
            value={this.state.director}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
