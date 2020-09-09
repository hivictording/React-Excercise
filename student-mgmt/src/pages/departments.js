import React, { Component } from "react";

import AddDepartmentForm from "../components/departments/add-form";
import SearchDepartmentForm from "../components/departments/search-form";
import DepartmentInfo from "../components/departments/info";

export default class DepartmentsPage extends Component {
  render() {
    return (
      <main id="departments">
        <div className="departments-left py-3">
          <AddDepartmentForm />
          <SearchDepartmentForm />
        </div>
        <div className="departments-right p-3">
          <DepartmentInfo />
        </div>
      </main>
    );
  }
}
