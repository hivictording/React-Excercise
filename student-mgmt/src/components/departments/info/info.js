import React, { Component } from "react";

import { DataConsumer } from "../../../context";

import SingleInfo from "./singleInfo";

export default class DepartmentInfo extends Component {
  render() {
    return (
      <DataConsumer>
        {(value) => {
          const { loading } = value.departments;
          const { filteredDepartments } = value;
          if (loading) return <h1>Loading Data.....</h1>;
          if (!loading)
            return (
              <table id="departments-info" className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Department</th>
                    <th scope="col">Director</th>
                    <th scope="col">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDepartments.map((item, index) => (
                    <SingleInfo key={item.id} {...item} index={index} />
                  ))}
                </tbody>
              </table>
            );
        }}
      </DataConsumer>
    );
  }
}
