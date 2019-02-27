import React from "react";
import { withFirebase } from "./firebase";

const SignOut = ({firebase}) => (
  <button type="button" onClick={firebase.signOut}>Sign Out</button>
);

export default withFirebase(SignOut);
