import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import URL from "../components/globals";
import fetchData from "../utils/fetchData";

const Context = React.createContext();

export default class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: { loading: true, data: [] },
      filteredDepartments: [],
      students: { loading: true, data: [] },
      filteredStudents: [],
      currentStu: {
        id: uuid(),
        username: "",
        firstname: "",
        lastname: "",
        gender: "",
        age: "",
        country: "",
        hobbies: [],
        department: "",
      },
    };
  }

  setDepartments = async () => {
    let data = await fetchData(`${URL}/departments`);
    this.setState({
      departments: { loading: false, data },
      filteredDepartments: data,
    });
  };

  setStudents = async () => {
    let data = await fetchData(`${URL}/students`);
    this.setState({
      students: { loading: false, data },
      filteredStudents: data,
    });
  };

  addDepartment = async (id, name, director) => {
    await axios.post(`${URL}/departments`, { id, name, director });
    // this.setState({
    //   departments: {
    //     loading: false,
    //     data: [...this.state.departments.data, { id, name, director }],
    //   },
    // });

    await this.setDepartments();
  };

  editDepartment = async (id, name, director) => {
    await axios.put(`${URL}/departments/${id}`, {
      name: name,
      director: director,
    });

    await this.setDepartments();
  };

  deleteDepartment = async (id) => {
    await axios.delete(`${URL}/departments/${id}`);

    await this.setDepartments();
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

  addStudent = async (
    id,
    username,
    fullname,
    gender,
    age,
    country,
    hobbies,
    department
  ) => {
    await axios.post(`${URL}/students`, {
      id,
      username,
      fullname,
      gender,
      age,
      country,
      hobbies,
      department,
    });

    await this.setStudents();
  };

  editStudent = () => {};
  deleteStudent = () => {};
  searchStudent = () => {};

  setCurrentStu = async (id) => {
    let currentStu = await fetchData(`${URL}/students/${id}`);

    this.setState({
      currentStu: currentStu,
    });
  };

  handleStuFormChange = (event) => {
    const target = event.target;
    if (target.type === "checkbox") {
      if (this.state.currentStu[target.name].includes(target.value)) {
        this.setState({
          currentStu: {
            ...this.state.currentStu,
            [target.name]: this.state[target.name].filter(
              (item) => item !== target.value
            ),
          },
        });
      } else {
        this.setState({
          currentStu: {
            ...this.state.currentStu,
            [target.name]: [
              ...this.state.currentStu[target.name],
              target.value,
            ],
          },
        });
      }
    } else {
      this.setState({
        currentStu: { ...this.state.currentStu, [target.name]: target.value },
      });
    }
  };

  async componentDidMount() {
    let dataDepartments = await fetchData(`${URL}/departments`);
    let dataStudents = await fetchData(`${URL}/students`);
    this.setState({
      departments: { loading: false, data: dataDepartments },
      filteredDepartments: dataDepartments,
      students: { loading: false, data: dataStudents },
      filteredStudents: dataStudents,
    });
  }

  render() {
    const {
      addDepartment,
      editDepartment,
      deleteDepartment,
      searchDepartment,
      addStudent,
      setCurrentStu,
      handleStuFormChange,
    } = this;
    return (
      <Context.Provider
        value={{
          ...this.state,
          addDepartment,
          editDepartment,
          deleteDepartment,
          searchDepartment,
          addStudent,
          setCurrentStu,
          handleStuFormChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const DataConsumer = Context.Consumer;

export { Context, DataConsumer };
