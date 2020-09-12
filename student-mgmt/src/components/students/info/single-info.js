import React, { Component } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { Context } from "../../../context";

export default class SingleInfo extends Component {
  static contextType = Context;

  handleEdit = (id) => {
    const { setCurrentStu } = this.context;

    // event.preventDefault();
    setCurrentStu(id);
  };

  render() {
    const { index, id, username, gender, department } = this.props;
    // console.log(setCurrentStu);
    // console.log(this.props);
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
            onClick={() => this.handleEdit(id)}
          >
            <FaEdit />
          </a>
          <a href="#" className="text-secondary">
            <FaTrashAlt />
          </a>
        </td>
      </tr>
    );
  }
}
