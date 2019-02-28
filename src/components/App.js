import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "./session";
import Navigation from "./navigation";
import Home from "./home";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import Account from "./account";
import PasswordForgot from "./passwordForgot";

const App = () =>(
  
  <Router>
  <div>
    <Navigation />
    <hr />
    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/account" component={Account} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/passwordForgot" component={PasswordForgot} />
  </div>
</Router>
) 
   


export default withAuthentication(App);
