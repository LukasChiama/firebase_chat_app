import React, { Component } from "react";
import { withFirebase } from "./firebase";
import { Link } from "react-router-dom"

const PasswordForgot = () => (
  <div>
    <h1>Forgot Password?</h1>
    <PasswordForgotForm />
  </div>
);

const userDetails = {
  email: "",
  error: null
}

class ForgotPassword extends Component {
  state = {
    ...userDetails
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    const { email } = this.state;
    this.props.firebase
      .passwordReset(email)
      .then(() => {
        this.setState({...userDetails });
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="Please enter your email address"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={isInvalid}>
        Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgotLink = () => (
  <p>
    <Link to="/passwordForgot">Forgot Password?</Link>
  </p>
)

const PasswordForgotForm = withFirebase(ForgotPassword)

export default PasswordForgot;

export { PasswordForgotLink, PasswordForgotForm }
