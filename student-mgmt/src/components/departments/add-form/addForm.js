import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import { Context } from "../../../context";

export default class AddDepartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: {},
      id: uuid(),
      name: "",
      director: "",
    };
    this.inputs = {};
  }

  static contextType = Context;

  handleChange = (event) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id, name, director } = this.state;

    const addDepartment = this.context.addDepartment;
    addDepartment(id, name, director);

    this.setState({
      id: uuid(),
      name: "",
      director: "",
    });
    this.state.elements["name"].focus();
  };

  setRef = (element) => {
    if (element) {
      this.inputs = { ...this.inputs, [element.name]: element };
    }
  };

  componentDidMount() {
    this.setState({
      elements: this.inputs,
    });
  }

  render() {
    const { name, director } = this.state;
    return (
      <form
        id="add-department-form"
        className="text-center mb-3"
        onSubmit={this.handleSubmit}
      >
        <div className="form-title mb-3">Add Department</div>
        <div className="form-group department-name">
          <label htmlFor="name">Department Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            autoFocus={true}
            ref={this.setRef}
            placeholder="Enter department name"
          />
        </div>
        <div className="form-group department-director">
          <label htmlFor="director">Director</label>
          <input
            className="form-control"
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={this.handleChange}
            ref={this.setRef}
            placeholder="Enter director name"
          />
        </div>
        <input
          className="form-control btn btn-info"
          type="submit"
          value="Add"
        />
      </form>
    );
  }
}
