import React, { Component } from "react";

import { DataConsumer } from "../../../context";

export default class SingleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      id: this.props.id,
      name: this.props.name,
      director: this.props.director,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    // const name = target.name.slice(0, 4);

    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { index } = this.props;
    let { edit, id, name, director } = this.state;

    return (
      <DataConsumer>
        {(value) => {
          const { editDepartment, deleteDepartment } = value;
          return (
            <tr key={id} className={edit ? "allow-edit" : ""}>
              <th scope="row">{index + 1}</th>
              <td>
                <input
                  type="text"
                  name={`name`}
                  value={name}
                  onChange={this.handleChange}
                  ref={(element) => (this.nameRef = element)}
                  disabled={edit ? false : true}
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`director`}
                  value={director}
                  onChange={this.handleChange}
                  disabled={edit ? false : true}
                />
              </td>
              <td>
                {edit || (
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => {
                      this.setState({ edit: true }, () => this.nameRef.focus());
                    }}
                  >
                    Edit
                  </button>
                )}
                {edit || (
                  <button
                    className="btn btn-info"
                    onClick={() => deleteDepartment(id)}
                  >
                    Delete
                  </button>
                )}
                {edit && (
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => this.setState({ edit: false })}
                  >
                    Cancel
                  </button>
                )}
                {edit && (
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      editDepartment(id, name, director);
                      this.setState({ edit: false });
                    }}
                  >
                    Submit
                  </button>
                )}
              </td>
            </tr>
          );
        }}
      </DataConsumer>
    );
  }
}
