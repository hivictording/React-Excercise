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
      editingStu: false,
    };

    this.stuFormRefs = [];
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

  addStudent = async (event) => {
    event.preventDefault();
    // add student into database;
    const {
      id,
      username,
      firstname,
      lastname,
      gender,
      age,
      country,
      hobbies,
      department,
    } = this.state.currentStu;

    const fullname = `${firstname} ${lastname}`;
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

    // set student related state
    await this.setStudents();

    this.setState({
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
    });

    // Reset form
    for (const values of Object.values(this.stuFormRefs)) {
      values.forEach((value) => {
        if (value.type === "radio" || value.type === "checkbox") {
          value.element.checked = false;
        } else if (value.type === "select-one") {
          value.element.children[0].selected = true;
        }
      });
    }
    this.stuFormRefs["username"][0].element.focus();
  };

  editStudent = () => {};
  deleteStudent = () => {};
  searchStudent = () => {};

  setCurrentStu = async (id) => {
    let currentStu = await fetchData(`${URL}/students/${id}`);
    // console.log(currentStu);
    const {
      username,
      fullname,
      gender,
      age,
      country,
      hobbies,
      department,
    } = currentStu;

    const firstname = fullname.split(" ")[0];
    const lastname = fullname.split(" ")[1];

    this.setState(
      {
        currentStu: {
          username,
          firstname,
          lastname,
          gender,
          age,
          country,
          hobbies,
          department,
        },
        editingStu: true,
      },
      () => {
        this.stuFormRefs.forEach((refs) => {
          if (refs.elementsType === "radio" && refs.elementsName === "gender") {
            refs.elements.forEach((ref) => {
              if (ref.value === gender) {
                ref.checked = true;
              }
            });
          } else if (
            refs.elementsType === "checkbox" &&
            refs.elementsName === "hobbies"
          ) {
            refs.elements.forEach((ref) => {
              ref.checked = hobbies.includes(ref.value) ? true : false;
            });
          } else if (refs.elementsType === "select-one") {
            refs.elements[0].value = department;
          }
        });
      }
    );
  };

  handleStuFormChange = (event) => {
    const target = event.target;
    const { currentStu } = this.state;
    if (target.type === "checkbox") {
      if (currentStu[target.name].includes(target.value)) {
        this.setState({
          currentStu: {
            ...currentStu,
            [target.name]: currentStu[target.name].filter(
              (item) => item !== target.value
            ),
          },
        });
      } else {
        this.setState({
          currentStu: {
            ...currentStu,
            [target.name]: [...currentStu[target.name], target.value],
          },
        });
      }
    } else {
      this.setState({
        currentStu: { ...currentStu, [target.name]: target.value },
      });
    }
  };

  handleStuRef = (element) => {
    if (!element) return;

    // judge if elements with the same input "name" is there
    let tempRef = [];
    if (this.stuFormRefs.length > 0) {
      tempRef = this.stuFormRefs.filter(
        (item) => item.elementsName === element.name
      );
    }

    // if there's no such element with the same input "name"
    if (tempRef.length === 0) {
      this.stuFormRefs = [
        ...this.stuFormRefs,
        {
          elementsName: element.name,
          elementsType: element.type,
          elements: [element],
        },
      ];
      // if there're already elements with the same input "name"
    } else {
      this.stuFormRefs = this.stuFormRefs.map((ref) => {
        return ref.elementsName === element.name
          ? { ...ref, elements: [...ref.elements, element] }
          : ref;
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
      handleStuRef,
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
          handleStuRef,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const DataConsumer = Context.Consumer;

export { Context, DataConsumer };
