import React, { Component } from "react";

import { DataConsumer } from "../../../context";

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
              <table className="table">
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
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.director}</td>
                      <td>Edit Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
        }}
      </DataConsumer>
    );
  }
}
