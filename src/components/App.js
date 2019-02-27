import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "./firebase";
import { AuthUserContext } from "./session";
import Navigation from "./navigation";
import Home from "./home";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import PasswordForgot from "./passwordForgot";

class App extends React.Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <hr />
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/passwordForgot" component={PasswordForgot} />
          </div>
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
