import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import { Context } from "../../../context";

export default class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: uuid(),
      // username: "",
      // firstname: "",
      // lastname: "",
      // gender: "",
      // age: "",
      // country: "",
      // hobbies: [],
      // department: "",
      refs: [],
    };

    this.refObj = {};
  }

  static contextType = Context;

  handleChange = (event) => {
    const target = event.target;
    if (target.type === "checkbox") {
      if (this.state[target.name].includes(target.value)) {
        this.setState({
          [target.name]: this.state[target.name].filter(
            (item) => item !== target.value
          ),
        });
      } else {
        this.setState({
          [target.name]: [...this.state[target.name], target.value],
        });
      }
    } else {
      this.setState({
        [target.name]: target.value,
      });
    }
  };

  handleRef = (element) => {
    if (!element) return;
    if (element.name in this.refObj) {
      this.refObj[element.name] = [
        ...this.refObj[element.name],
        { type: element.type, element: element },
      ];
    } else {
      this.refObj[element.name] = [{ type: element.type, element: element }];
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { addStudent } = this.context;
    const {
      addStudent,
      currentStu: {
        id,
        username,
        firstname,
        lastname,
        gender,
        age,
        country,
        hobbies,
        department,
      },
    } = this.context;
    const fullname = `${firstname} ${lastname}`;
    addStudent(
      id,
      username,
      fullname,
      gender,
      age,
      country,
      hobbies,
      department
    );

    this.setState({
      id: uuid(),
      username: "",
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      country: "",
      hobbies: [],
      department: "",
    });

    for (const values of Object.values(this.refObj)) {
      values.forEach((value) => {
        if (value.type === "radio" || value.type === "checkbox") {
          value.element.checked = false;
        } else if (value.type === "select-one") {
          // console.log(value.element.children);
          value.element.children[0].selected = true;
        }
      });
    }

    this.refObj["username"][0].element.focus();
  };

  render() {
    const {
      departments: { data },
      currentStu: { username, firstname, lastname, age, country },
      handleStuFormChange,
    } = this.context;
    // console.log(currentStu);
    // const { username, firstname, lastname, age, country } = this.state;
    return (
      <form id="add-student-form" className="text-center">
        <div className="form-title">Add Student</div>
        {/* username */}
        <div className="form-group w-75 mx-auto mb-3 ">
          <label htmlFor="username">Username</label>
          <input
            className="form-control form-control-sm"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleStuFormChange}
            ref={this.handleRef}
          />
        </div>

        {/* full name */}
        <div className="fullname w-75 mx-auto d-flex justify-content-between">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="gender mb-3">
          <span className="gender-title text-capitalize mr-3">
            select gender
          </span>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="male"
              className="form-check-input"
              value="male"
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
            <label className="form-check-label text-capitalize" htmlFor="male">
              male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="female"
              className="form-check-input"
              value="female"
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
            <label
              className="form-check-label text-capitalize"
              htmlFor="female"
            >
              female
            </label>
          </div>
        </div>

        {/* age and country */}
        <div className="age-country w-75 mx-auto d-flex justify-content-between">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
          </div>
        </div>

        {/* Hobbies */}
        <div className="hobbies mb-3">
          <span className="hobbies-title text-capitalize mr-3">hobbies</span>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobbies"
              id="travel"
              className="form-check-input"
              value="travel"
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
            <label
              className="form-check-label text-capitalize"
              htmlFor="travel"
            >
              travel
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobbies"
              id="reading"
              className="form-check-input"
              value="reading"
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
            <label
              className="form-check-label text-capitalize"
              htmlFor="reading"
            >
              reading
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="hobbies"
              id="fishing"
              className="form-check-input"
              value="fishing"
              onChange={handleStuFormChange}
              ref={this.handleRef}
            />
            <label
              className="form-check-label text-capitalize"
              htmlFor="fishing"
            >
              fishing
            </label>
          </div>
        </div>

        {/* department */}
        <div className="department form-group w-75 mx-auto">
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            className="custom-select custom-select-sm"
            defaultValue=""
            onChange={handleStuFormChange}
            ref={this.handleRef}
          >
            <option value="">Select a department</option>
            {data &&
              data.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <button
          className="btn btn-info btn-sm text-capitalize"
          onClick={this.handleSubmit}
        >
          add student
        </button>
      </form>
    );
  }
}
