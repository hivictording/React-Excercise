import React, { Component } from "react";

import { Context } from "../../../context";

export default class AddStudentForm extends Component {
  static contextType = Context;

  render() {
    const {
      departments: { data },
    } = this.context;
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="lastname"
              name="lastname"
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="country"
              name="country"
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
          >
            {data &&
              data.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </form>
    );
  }
}
