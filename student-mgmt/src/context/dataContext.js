import React, { Component } from "react";
import axios from "axios";

import URL from "../components/globals";
import fetchData from "../utils/fetchData";

const Context = React.createContext();

export default class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: { loading: true, data: [] },
      filteredDepartments: [],
      students: [],
    };
  }

  addDepartment = async (id, name, director) => {
    await axios.post(`${URL}/departments`, { id, name, director });
    // this.setState({
    //   departments: {
    //     loading: false,
    //     data: [...this.state.departments.data, { id, name, director }],
    //   },
    // });

    let data = await fetchData(`${URL}/departments`);
    this.setState({
      departments: { loading: false, data },
      filteredDepartments: data,
    });
  };

  editDepartment = async (id, name, director) => {
    await axios.put(`${URL}/departments/${id}`, {
      name: name,
      director: director,
    });

    let data = await fetchData(`${URL}/departments`);
    this.setState({
      departments: { loading: false, data },
      filteredDepartments: data,
    });
  };

  searchDepartment = (str) => {
    if (str.trim()) {
      let filtered = this.state.departments.data.filter(
        (department) =>
          department.director.startsWith(str) || department.name.startsWith(str)
      );
      this.setState({
        filteredDepartments: filtered,
      });
    } else {
      this.setState({
        filteredDepartments: this.state.departments.data,
      });
    }
  };

  async componentDidMount() {
    let data = await fetchData(`${URL}/departments`);
    this.setState({
      departments: { loading: false, data },
      filteredDepartments: data,
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addDepartment: this.addDepartment,
          editDepartment: (id, name, department) =>
            this.editDepartment(id, name, department),
          searchDepartment: (str) => this.searchDepartment(str),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const DataConsumer = Context.Consumer;

export { Context, DataConsumer };
