import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.secondaryColor};
  padding: 0.5em 1em;

  .header-title {
    font-family: ${(props) => props.theme.font.secondaryFontBold};
  }

  .toggle-color {
    text-decoration: none;
    color: lightgrey;
    transition: all 0.3s linear;
  }

  .toggle-color:hover {
    color: lightpink;
  }
`;

export default () => {
  const [themes, setThemes] = useState({
    color: { primaryColor: " #54598b", secondaryColor: " #dbeee1" },
    font: { secondaryFontBold: "assistant-bold" },
  });

  const handleClick = () => {
    setThemes({
      color: {
        primaryColor: themes.color.secondaryColor,
        secondaryColor: themes.color.primaryColor,
      },
      font: { secondaryFontBold: "assistant-bold" },
    });
  };

  return (
    // <header className="header py-2" id="header">
    <ThemeProvider theme={themes}>
      <HeaderWrapper>
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
                <a className="toggle-color" href="#" onClick={handleClick}>
                  Change Color
                </a>
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </ThemeProvider>
  );
};
