import React, { Component } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { Context } from "../../../context";

export default class SingleInfo extends Component {
  static contextType = Context;

  render() {
    const { index, id, username, gender, department } = this.props;
    const { setCurrentStu, deleteStudent } = this.context;

    return (
      <tr className="text-center">
        <th scope="col">{index + 1}</th>
        <td scope="row">{username}</td>
        <td scope="row">{gender}</td>
        <td scope="row">{department}</td>
        <td scope="row" className="d-flex justify-content-around">
          <a
            href="#"
            className="text-secondary"
            onClick={() => setCurrentStu(id)}
          >
            <FaEdit />
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => deleteStudent(id)}
          >
            <FaTrashAlt />
          </a>
        </td>
      </tr>
    );
  }
}
