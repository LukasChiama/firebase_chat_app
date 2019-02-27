import React, { Component } from "react";
import { withFirebase } from "./firebase";

const userDetails = {
  password1: "",
  password2: "",
  error: null
};

class ChangePassword extends Component {
  state = {
    ...userDetails
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    const { password1 } = this.state;
    this.props.firebase
      .passwordUpdate(password1)
      .then(() => {
        this.setState({ userDetails });
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  render() {
    const { password1, password2, error } = this.state;
    const isInvalid =
      password1 === "" || password1 !== password2;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Password:
          <input
            name="password1"
            type="password"
            onChange={this.handleChange}
            placeholder="Enter new password"
            value={password1}
          />
        </label>
        <label>
          Confirm Password:
          <input
            name="password2"
            type="password"
            onChange={this.handleChange}
            placeholder="Confirm new password"
            value={password2}
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(ChangePassword)