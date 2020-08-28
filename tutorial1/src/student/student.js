import React, { Component } from "react";
import person from "../static/image/person.jpg";

import PropTypes from "prop-types";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
      showImg: true,
    };
  }

  // static propTypes = {
  //   // name: PropTypes.string,
  //   grade: PropTypes.number,
  //   score: PropTypes.number,
  //   student: (props, attr) => {
  //     console.log(props[attr]);
  //     if (typeof props[attr].name !== String) {
  //       throw new Error(`Name is not string`);
  //     }
  //   },
  // };

  click = (event) => {
    this.setState({
      // ...this.state,
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { name, grade, score } = this.props;
    return (
      <article onClick={this.click} className="student">
        <div>
          <img src={person} alt="student"></img>
        </div>

        <h3>Student name: {name}</h3>
        {this.state.showInfo && <h5>Student grade: {grade}</h5>}
        {this.state.showInfo && <h5>Student score: {score}</h5>}
      </article>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string,
  grade: PropTypes.number.isRequired,
  score: PropTypes.number,
  student: PropTypes.shape({
    name: PropTypes.string,
    grade: PropTypes.number,
    score: PropTypes.number,
  }),
};

Student.defaultProps = {
  name: "SonicWALL",
  grade: "grade 12",
  score: 90,
};
