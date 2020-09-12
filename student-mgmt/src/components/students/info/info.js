import React, { Component } from "react";

import { Context } from "../../../context";
import SingleInfo from "../../students/info/single-info";

export default class StudentInfo extends Component {
  static contextType = Context;

  render() {
    const {
      students: { loading },
      filteredStudents: data,
    } = this.context;

    return (
      <div className="student-info">
        {loading && <h1>Loading Data.....</h1>}
        {loading || (
          <table className="table table-striped">
            <thead>
              <tr className="text-center">
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Gender</th>
                <th scope="col">Department</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <SingleInfo key={item.id} index={index} {...item} />
                ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
