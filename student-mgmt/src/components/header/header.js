import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="header py-2" id="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <Link
              className="header-title text-left text-secondary font-italic"
              to="/"
            >
              Student MGMT
            </Link>
          </div>
          <div className="col-6 header-center">
            <div className="links">
              <Link to="/students" className="text-secondary px-3">
                Students
              </Link>
              <Link to="/departments" className="text-secondary px-3">
                Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
