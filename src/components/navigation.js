import React from "react";
import { Link } from "react-router-dom";
import SignOut from "./signout";
import { AuthUserContext } from "./session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth /> : <NavigationNotAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

const NavigationNotAuth = () => (
  <div>
    <ul>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
