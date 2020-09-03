import React, { Component, createRef } from "react";

export default class UncontrolledForm extends Component {
  constructor(props) {
    super(props);

    this.addUser = this.props.addUser;

    this.refUsername = createRef();
    this.refPassword = createRef();
    this.refEmail = createRef();

    this.state = {
      usernameEmpty: false,
      passwdEmpty: false,
      emailEmpty: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const username = this.refs.username;
    // const password = this.refs.password;
    // const email = this.refs.email;
    // const username = this.username;
    // const password = this.password;
    // const email = this.email;
    const username = this.refUsername.current;
    const password = this.refPassword.current;
    const email = this.refEmail.current;

    this.addUser(username.value, password.value, email.value);
  };

  render() {
    const { usernameEmpty, passwdEmpty, emailEmpty } = this.props;

    return (
      <form className="uncontrolled-form" onSubmit={this.handleSubmit}>
        <h2>Uncontrolled Form</h2>
        <div className="input-group">
          <label htmlFor="uf_username">username</label>

          {/* 3 ways to create ref */}
          <input type="text" id="uf_username" ref={this.refUsername} />
          {/* <input
            type="text"
            id="uf_username"
            ref={(input) => (this.username = input)}
          /> */}
          {/* <input type="text" id="uf_username" ref="username" /> */}
          {usernameEmpty && (
            <p className="warning">Username can not be empty.</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="uf_password">password</label>
          <input type="password" id="uf_password" ref={this.refPassword} />
          {/* <input
            type="password"
            id="uf_password"
            ref={(input) => (this.password = input)}
          /> */}
          {/* <input type="password" id="uf_password" ref="password" /> */}
          {passwdEmpty && <p className="warning">Password can not be empty.</p>}
        </div>

        <div className="input-group">
          <label htmlFor="uf_email">email</label>
          <input type="email" id="uf_email" ref={this.refEmail} />
          {/* <input
            type="email"
            id="uf_email"
            ref={(input) => (this.email = input)}
          /> */}
          {/* <input type="email" id="uf_email" ref="email" /> */}
          {emailEmpty && <p className="warning">Email can not be empty.</p>}
        </div>

        <div className="input-group">
          <input type="submit" value="Add User" />
        </div>
      </form>
    );
  }
}
