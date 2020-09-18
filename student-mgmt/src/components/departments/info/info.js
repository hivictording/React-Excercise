import React, { Component } from "react";
import styled from "styled-components";

import { DataConsumer } from "../../../context";

import SingleInfo from "./singleInfo";

class DepartmentInfo extends Component {
  render() {
    // Styled components className
    const { className } = this.props;
    return (
      <DataConsumer>
        {(value) => {
          const { loading } = value.departments;
          const { filteredDepartments } = value;
          if (loading) return <h1>Loading Data.....</h1>;
          if (!loading)
            return (
              <table
                id="departments-info"
                className={`table table-striped ${className}`}
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Department</th>
                    <th scope="col">Director</th>
                    <th scope="col">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDepartments &&
                    filteredDepartments.map((item, index) => (
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

export default styled(DepartmentInfo)`
  font-size: 0.8em;

  tr.allow-edit {
    input {
      border: 1px solid black;
      background: $gray-5;
    }
  }

  input {
    border: none;
    background: transparent;
    color: black;
  }

  button {
    font-size: 0.7em;
  }

  .operation-icon {
    font-size: 1.3em;
  }
`;
