import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./firebase";

const SignUp = () => (
  <div>
    <h1>Sign up</h1>
    <SignUpForm />
  </div>
);

const userDetails = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  error: null
};

class Form extends React.Component {
  state = {
    ...userDetails
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    const { username, email, password1 } = this.state;
    this.props.firebase
      .createUser(email, password1)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid)
        .set({
          username,
          email
        })
      })
      .then(() => {
        this.setState({ ...userDetails });
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  render() {
    const { email, password1, password2, username, error } = this.state;

    const isInvalid =
      password1 !== password2 ||
      password1 === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          username:
          <input
            name="username"
            type="text"
            placeholder="Your full name..."
            onChange={this.handleChange}
            value={username}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="Type your email here..."
            onChange={this.handleChange}
            value={email}
          />
        </label>
        <label>
          Password 1:
          <input
            name="password1"
            type="password"
            placeholder="Your password..."
            onChange={this.handleChange}
            value={password1}
          />
        </label>
        <label>
          Password 2:
          <input
            name="password2"
            type="password"
            placeholder="Confirm your password..."
            onChange={this.handleChange}
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

const SignUpLink = () => (
  <p>
    Don't have an account yet? <Link to="/signup">Sign up here</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(Form));

export default SignUp;

export { SignUpLink, SignUpForm };
