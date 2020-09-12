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
      <>
        {loading && <h1>Loading Data.....</h1>}
        {loading || (
          <table className="table table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>Username</td>
                <td>Fullname</td>
                <td>Gender</td>
                <td>Department</td>
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
      </>
    );
  }
}
