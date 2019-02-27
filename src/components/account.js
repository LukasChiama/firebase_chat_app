import React from "react"
import ChangePassword from "./passwordChange";
import { PasswordForgotForm } from "./passwordForgot"

const Account = () => (
  <div>
    <h2>Account Settings</h2>
    <ChangePassword />
    <PasswordForgotForm />
  </div>
)

export default Account