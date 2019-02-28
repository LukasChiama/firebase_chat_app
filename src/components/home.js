import React from "react";
import { withAuthorization } from "./session"

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome Home</p>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
