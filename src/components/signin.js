import React from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./firebase";
import { SignUpLink } from "./signup";
import { PasswordForgotLink } from "./passwordForgot";

const SignIn = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgotLink />
  </div>
);

const userDetails = {
  email: "",
  password: "",
  error: null
};

class LogInForm extends React.Component {
  state = {
    ...userDetails
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    this.props.firebase
      .signInUser(email, password)
      .then(() => {
        this.setState({ ...userDetails });
        this.props.history.push("/home")
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Your registered email"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Your password"
            onChange={this.handleChange}
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Log In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = withRouter(withFirebase(LogInForm));

export default SignIn;

export { SignInForm }
