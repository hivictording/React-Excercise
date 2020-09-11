import React, { Component } from "react";

export default class SingleInfo extends Component {
  render() {
    const { index, username, fullname, gender, department } = this.props;
    // console.log(this.props);
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{username}</td>
        <td>{fullname}</td>
        <td>{gender}</td>
        <td>{department}</td>
      </tr>
    );
  }
}
