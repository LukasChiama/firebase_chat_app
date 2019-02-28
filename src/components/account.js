import React from "react";
import ChangePassword from "./passwordChange";
import { PasswordForgotForm } from "./passwordForgot";
import { withAuthorization, AuthUserContext } from "./session";

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h2>Account {authUser.email}</h2>
        <h3>Change Password</h3>
        <ChangePassword />
        <h3>Reset Password</h3>
        <PasswordForgotForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
