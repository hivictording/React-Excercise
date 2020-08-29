import React, { Component } from "react";
import Form from "./components/form";
import People from "./components/people";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  addUser = (username, password, email) => {
    this.setState({
      people: [...this.state.people, { username, password, email }],
    });
  };

  render() {
    const { people } = this.state;
    return (
      <>
        <Form addUser={this.addUser} />
        <People people={people} />
      </>
    );
  }
}

export default App;
