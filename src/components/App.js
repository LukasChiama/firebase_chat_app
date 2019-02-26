import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./navigation"
import Home from "./home";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import PasswordForgot from "./passwordForgot"

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/home" component={Home} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/passwordForgot" component={PasswordForgot} />
    </div>
  </Router>

)

export default App;
