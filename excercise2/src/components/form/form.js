import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      userEmpty: false,
      passwdEmpty: false,
      emailEmpty: false,
    };
  }

  handleTyping = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, password, email } = this.state;
    const { usernameEmpty, passwdEmpty, emailEmpty } = this.state;
    const { addUser } = this.props;
    return (
      <form className="form">
        <h2>Controlled Form</h2>
        <div className="input-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleTyping}
          />
          {usernameEmpty && (
            <p className="warning">Username can not be empty.</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleTyping}
          />
          {passwdEmpty && <p className="warning">Password can not be empty.</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleTyping}
          />
          {emailEmpty && <p className="warning">Email can not be empty.</p>}
        </div>

        <div className="input-group">
          <input
            type="submit"
            value="Add User"
            onClick={(event) => {
              event.preventDefault();

              if (username.trim() === "") {
                this.setState({
                  usernameEmpty: true,
                });
                return;
              } else {
                this.setState({
                  usernameEmpty: false,
                });
              }

              if (password.trim() === "") {
                this.setState({
                  passwdEmpty: true,
                });
                return;
              } else {
                this.setState({
                  passwdEmpty: false,
                });
              }

              if (email.trim() === "") {
                this.setState({
                  emailEmpty: true,
                });
                return;
              } else {
                this.setState({
                  emailEmpty: false,
                });
              }

              addUser(username, password, email);

              this.setState({
                username: "",
                password: "",
                email: "",
              });
            }}
          />
        </div>
      </form>
    );
  }
}
